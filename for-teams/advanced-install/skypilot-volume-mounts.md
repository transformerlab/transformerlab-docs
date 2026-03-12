---
title: SkyPilot Volume Mounts for localfs
sidebar_position: 11
---

When you use `TFL_STORAGE_PROVIDER=localfs`, Transformer Lab expects a shared network filesystem path (for example NFS) that is visible from the jobs it launches.

If your compute provider is SkyPilot, this means the pod/container started by SkyPilot must mount the same host path that your `TFL_STORAGE_URI` points to.

## Why This Is Required

With `localfs`, data is not fetched from object storage. Your task reads and writes directly to a shared network volume that is mounted as a local filesystem path.

That path must be available in two places:

1. On the machine running your SkyPilot API/server (host path)
2. Inside SkyPilot task pods/containers (container mount path)

If these are not aligned, tasks can start successfully but fail when trying to access datasets, checkpoints, or artifacts.

## Example Mount Path

In this guide, we use `/shared_storage` as an example mount path for a shared network volume.

Then set:

```bash
TFL_STORAGE_PROVIDER=localfs
TFL_STORAGE_URI=/shared_storage
```

## Configure SkyPilot Host + Pod Mounts

1. Ensure the shared network volume is mounted on each Kubernetes worker node used by SkyPilot at a consistent host path (e.g. `/shared_storage`).

2. Add a hostPath volume mount in `~/.sky/config.yaml` on the SkyPilot head node.

```yaml
kubernetes:
  context_configs:
    default:
      pod_config:
        spec:
          containers:
            - volumeMounts:
                - name: tfl-shared-storage
                  mountPath: /shared_storage
          volumes:
            - name: tfl-shared-storage
              hostPath:
                path: /shared_storage
                type: DirectoryOrCreate
```

3. Ensure your Transformer Lab `.env` uses the same container path.

```bash
TFL_STORAGE_PROVIDER=localfs
TFL_STORAGE_URI=/shared_storage
```

## Optional: Persist Hugging Face and uv Caches

For faster repeated runs, mount persistent caches so new SkyPilot pods reuse downloaded models and Python packages.

1. Create cache directories on each worker node.

Replace `<LOCAL_USERNAME>` with your Linux username.

```bash
sudo mkdir -p /home/<LOCAL_USERNAME>/huggingface_cache
sudo mkdir -p /home/<LOCAL_USERNAME>/uv_cache
sudo chown -R 1000:1000 /home/<LOCAL_USERNAME>/huggingface_cache /home/<LOCAL_USERNAME>/uv_cache
sudo chmod -R 777 /home/<LOCAL_USERNAME>/huggingface_cache /home/<LOCAL_USERNAME>/uv_cache
```

2. Append cache env vars and mounts to `~/.sky/config.yaml`:

```yaml
kubernetes:
  context_configs:
    default:
      pod_config:
        spec:
          containers:
            - env:
                - name: HF_HOME
                  value: /home/sky/.cache/huggingface
                - name: UV_CACHE_DIR
                  value: /home/sky/.cache/uv
              volumeMounts:
                - name: hf-vol
                  mountPath: /home/sky/.cache/huggingface
                - name: uv-vol
                  mountPath: /home/sky/.cache/uv
          volumes:
            - name: hf-vol
              hostPath:
                path: /home/<LOCAL_USERNAME>/huggingface_cache
                type: DirectoryOrCreate
            - name: uv-vol
              hostPath:
                path: /home/<LOCAL_USERNAME>/uv_cache
                type: DirectoryOrCreate
```

## Validation Checklist

Before running tasks, verify all of the following:

- `TFL_STORAGE_PROVIDER=localfs` is set in `.env`
- `TFL_STORAGE_URI` points to the mounted container path (for this example: `/shared_storage`)
- The same storage is mounted on all nodes that can run tasks
- `~/.sky/config.yaml` has matching `hostPath` and `mountPath` values
