## Advanced Task Submission: Parameterization and Sweeps

Once you are comfortable running single tasks, you can take advantage of **parameterization** and **sweeps** to explore many configurations automatically.

This guide explains:

- What parameterization is and how it relates to your task definitions.
- What sweeps are and when to use them.
- Three concrete examples:
  - **Example 1**: learning-rate sweep.
  - **Example 2**: model/dataset grid.
  - **Example 3**: multi-parameter sweep.

> **Image placeholder:** screenshot or diagram showing several jobs launched as part of a sweep, converging into a best-run highlight.

---

### Parameterization: turn constants into knobs

Most tasks contain values that could reasonably change between runs, such as:

- Learning rate.
- Batch size.
- Number of epochs or steps.
- Model name or size.
- Dataset identifier or split.

**Parameterization** is the process of:

- Identifying these values.
- Declaring them as parameters (with types such as integer, float, boolean, enum/string).
- Allowing the GUI/CLI to set them at launch time or define ranges for sweeps.

In practice, this means:

- Your task configuration (such as `task.yaml` or UI schema) exposes fields for those values.
- The GUI shows appropriate controls (sliders, switches, selects).
- The CLI allows you to pass them via config files or flags.

> The exact schema and UI widget mapping depend on your Transformer Lab version; use existing tasks as references for how different parameter types are surfaced.

---

### Sweeps: explore many configurations (grid search)

Once parameters are defined, a **sweep** lets you:

- Specify a **list of values** for one or more parameters.
- Ask Transformer Lab to launch one job for **every combination** of those values (a full grid search).
- Use a **metric** (for example, `eval/loss` or `eval/accuracy`) to compare and identify the best run.

Conceptually:

1. Pick the parameters you want to vary (they must already exist under `parameters:` in your task).
2. Define a `sweeps` block in `task.yaml` with:
   - `sweep_config`: a mapping from parameter name to a list of values.
   - `sweep_metric`: the metric name to optimize.
   - `lower_is_better`: whether lower metric values are better.
3. Launch the task (from GUI or CLI) with sweeps enabled; Transformer Lab expands `sweep_config` into all combinations internally.

> **Image placeholder:** screenshot of a sweep configuration view showing parameters and ranges.

---

### Example 1: Learning-rate sweep

**Goal:** Find a good learning rate for a given model and dataset.

Think of a task that already works with a single `learning_rate` value defined under `parameters:`. To turn this into a sweep in `task.yaml`:

```yaml
parameters:
  learning_rate:
    type: float
    default: 0.0003
    title: Learning rate

sweeps:
  sweep_config:
    learning_rate: [0.0001, 0.0003, 0.001, 0.003]
  sweep_metric: eval/loss
  lower_is_better: true
```

Then launch the task (for example, via the GUI’s Queue Task dialog with sweeps turned on, or via CLI using `lab task queue`). Transformer Lab:

- Creates one job per `learning_rate` value.
- Tracks `eval/loss` for each job.

4. Inspect results:
   - Use the UI to compare `eval/loss` across runs.
   - Choose the configuration with the lowest loss as a starting point for future experiments.

> **Image placeholder:** chart of `learning_rate` vs. final `eval/loss`.

---

### Example 2: Model/dataset grid

**Goal:** Compare performance of different model/dataset combinations.

Suppose your task has two parameters defined:

- `model_name`
- `dataset_name`

You can define a simple 2×2 grid sweep in `task.yaml`:

```yaml
parameters:
  model_name:
    type: string
    default: model-small
  dataset_name:
    type: string
    default: dataset-a

sweeps:
  sweep_config:
    model_name: ["model-small", "model-medium"]
    dataset_name: ["dataset-a", "dataset-b"]
  sweep_metric: eval/accuracy
  lower_is_better: false
```

This will:

- Launch four jobs (2 models × 2 datasets).
- Let you compare `eval/accuracy` across all combinations.

In the UI you can:

- Filter by model or dataset.
- Identify which combination performs best.

> **Image placeholder:** table or heatmap-style visualization for model vs. dataset accuracy.

---

### Example 3: Multi-parameter sweep

**Goal:** Explore a richer space of hyperparameters (for example, learning rate, batch size, and dropout).

If your task exposes parameters:

- `learning_rate` (float)
- `batch_size` (integer)
- `dropout` (float)

You might configure a 2×2×2 sweep in `task.yaml`:

```yaml
parameters:
  learning_rate:
    type: float
    default: 0.0003
  batch_size:
    type: int
    default: 16
  dropout:
    type: float
    default: 0.1

sweeps:
  sweep_config:
    learning_rate: [0.0003, 0.001]
    batch_size: [16, 32]
    dropout: [0.1, 0.3]
  sweep_metric: eval/accuracy
  lower_is_better: false
```

This yields:

- 2 × 2 × 2 = 8 configurations.
- Each job runs with a different combination of these three parameters.

Once the sweep completes, you can:

- Sort runs by `eval/accuracy`.
- Inspect the top performers to see which combination might be best.
- Use that configuration as the basis for a more focused search if needed.

> **Image placeholder:** scatter or parallel-coordinates plot showing how metrics vary with multiple parameters.

---

### Tips and next steps

- Avoid sweeping **too many** parameters at once—start small and expand.
- Use sweeps to validate intuition from single runs rather than guessing from scratch.
- Keep good notes (or use config versioning) so you can reproduce strong configurations.

For background on basic task submission:

- See **`task-submission.md`** for the overall concept and starting from example tasks.
- See **`task-submission-gui.md`** and **`task-submission-cli.md`** for running individual tasks from the GUI or CLI.
- See **`task-submission-existing-scripts.md`** to integrate your own scripts with the lab SDK facade.

