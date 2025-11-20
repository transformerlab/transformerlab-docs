---
sidebar_position: 5
---

# Diffusion LLM Trainer (Text Diffusion)

The Diffusion LLM Trainer plugin brings masked-language and diffusion-style alignment workflows into the Train tab. It builds on the `dllm` Python plugin format and supports CUDA hardware for training `BertForMaskedLM`, `ModernBertForMaskedLM`, `DreamModel`, and `LLaDAModelLM` architectures. Use it when you need quick SFT-style adaptation with Dream/CART weighting or lightweight LoRA adapters instead of full fine-tunes.

## Step 1: Install the Plugin

1. Open the `Plugins` tab.
2. Filter by `Trainer` and install **Diffusion LLM Trainer**.
3. Confirm the environment is configured for CUDA GPUs. CPU or TPU can be selected in the config, but training performance and plugin validation currently target CUDA.

:::note
If you plan to use multi-GPU, keep `gpu_ids` on `auto` to span every visible CUDA device, or enter a comma-separated list such as `0,1,2,3`.
:::

## Step 2: Prepare Your Text Dataset

You can either download a dataset from the Hugging Face Hub or upload your own dataset.

To upload your own dataset:

1. Go to the `Datasets` tab and click **New**.
2. Choose **Text** and import a dataset that contains prompt/response style pairs or masked-language data.


## Step 3: Create a Training Task

1. Navigate to the `Train` tab and click **New**.
2. Fill out the **Template/Task Name**, pick your dataset
3. Switch to **Plugin Config** and review every section below.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/config.png').default} width="600" />
</div>

### Core Execution Settings

- **Training Device (`train_device`):** Choose `cuda`, `cpu`, or `tpu`. Use `cuda` for best throughput.
- **GPU IDs (`gpu_ids`):** `auto` spans all visible GPUs; otherwise provide comma-separated IDs.
- **Training Method (`training_method`):**  
    - `bert` → Use for Bert models like `answerdotai/ModernBERT-large` 
    - `dream` → Use for Dream models like `Dream-org/Dream-v0-Instruct-7B`  
    - `llada` → Use for LLaDA models like `GSAI-ML/LLaDA-8B-Instruct`
- **Batch Size / Gradient Accumulation:** Balance per-device memory vs. total effective batch.
- **Sequence Length (`max_length`):** Cap sequences to manage VRAM.
- **Precision + Loading:** Toggle `dtype`, `load_in_4bit`, and `lora` to trade speed vs. quality.

### Optimization Schedule

- **Learning Rate (`learning_rate`)** and **Scheduler (`learning_rate_schedule`)** support constant, linear, cosine, and constant-with-warmup curves.
- **Warmup Ratio (`warmup_ratio`):** Fraction of total steps spent ramping LR.
- **Num Train Epochs / Train Steps:** Set epochs to `0` when driving via explicit step count.
- **Logging / Eval / Save Steps:** Accept fractional values (e.g., `0.25`) to express percent of total steps; useful for long runs.
- **Gradient Accumulation Steps:** Multiply with batch size to reach effective large-batch updates.

### Parameter-Efficient Fine-Tuning

When `lora` is enabled:

- **LoRA R (`lora_r`)** and **LoRA Alpha (`lora_alpha`):** Must be multiples of 4.
- **LoRA Dropout (`lora_dropout`):** Helps regularize long Dream runs.

### Dream-Specific Controls

- **Mask Prompt Loss:** Disable to let prompts influence gradients (default masks prompts).
- **Per-batch Cutoff / Response Cutoff Ratio:** Randomly trims responses to reduce overfitting.
- **Loss Weight Type:** Choose `cart[geo_p:0.3]` for CART-style decay or `scheduler` for step-aware weighting.

### Required Metadata

- **Adaptor Name:** Unique label for the saved adaptor.
- **Logging:** Keep `log_to_wandb` on to mirror metrics in Weights & Biases.

Click **Save Training Template** once everything looks correct.

## Step 4: Queue and Run the Job

1. From the template detail view, press **Queue**.
2. Watch the live logs. The runner will:
   - Launch distributed workers on the selected GPU IDs
   - Stream trainer logs, periodic evaluation, and checkpoint saves at `save_steps`

## Step 5: Monitor Training Metrics

- **TensorBoard:** Open the sidebar log link to inspect loss and learning-rate curves directly in Transformer Lab.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/tensorboard.png').default} width="600" />
</div>

- **Weights & Biases:** If `log_to_wandb` is enabled and your API key is set, you’ll see the run under the project configured in settings. 

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/wandb.png').default} width="600" />
</div>

## Step 6: Post-Training Outputs

- Dream/LLaDA runs automatically attach metadata about cutoff ratios and loss weighting, so you can track what worked best.
- You can view the final fused model in the Foundation tab.

## Tips for Successful Text-Diffusion Runs

- **Start with MDLM/BERT:** Validate your dataset and template on `bert` before jumping into Dream mode.
- **Dream Method Care:** When `perbatch_cutoff` is true, keep `resp_cutoff_ratio` conservative (`0.0–0.2`) to avoid truncating important supervision.
- **Sequence Budgeting:** Shorter `max_length` lowers memory use, enabling larger batch sizes or more GPUs.
- **LoRA vs. Full Fine-Tune:** Enable LoRA for quick iterations; disable it for full-parameter adaptation when VRAM allows.
- **Logging Discipline:** Align `logging_steps`, `eval_steps`, and `save_steps` so you always have checkpoints near the curves you analyze.
