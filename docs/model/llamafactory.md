---
title: LLaMA-Factory
icon: laptop-code
category:
- 设计模型
tag:
- 模型
---
LLaMA-Factory 是一个基于 Hugging Face 和 DeepSeek 模型的开源工具，主要用于大模型微调、推理及可视化操作。以下是其核心用法：

### 环境准备

1. ‌**安装 Anaconda** ‌：创建Python环境（推荐Python 3.11），激活环境后安装依赖（如`torch`、`metrics`等）。
2. ‌**下载模型**‌：通过`pip install modelscope download --model Qwen/Qwen2.5-VL-7B-Instruct --local_dir /data2/users/yszhang/quickllm/qwen2.5-vl-instruct`命令下载模型参数。

### 启动图形界面

运行`llamafactory-cli webui`启动Web界面（访问`http://127.0.0.1:7860`），通过以下步骤操作：

1. ‌**选择语言**‌：默认支持中文（zh）。
2. ‌**模型选择**‌：从Hugging Face或本地路径加载模型（如Qwen2.5-VL-7B-Instruct）。 
3. ‌**参数配置**‌：支持微调、推理参数设置，支持多卡训练（需提前安装 DeepSpeed ）。

### 微调流程

1. ‌**数据准备**‌：需自行准备训练数据（文本/代码补全模板）。
2. ‌**训练启动**‌：通过Web界面选择训练方法（如全量调参、 LoRA 等），指定GPU数量及输出路径。 
3. ‌**结果验证**‌：根据日志文件选择最优checkpoint进行推理测试。

### 注意事项

- 需确保服务器支持GPU加速，安装驱动及CUDA环境。 ‌
- 不同版本可能存在功能差异，建议参考官方GitHub更新日志。 ‌
