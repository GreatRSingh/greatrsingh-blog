---
title: "Rakshit's Lamma 3.1 Notes"
subtitle: "The Llama 3 Herd of Models"
date: "2024-7-27"
---

The development of modern foundation models consists of two main stages:

(1) a pre-training stage in which the model is trained at massive scale using straightforward tasks such as next-word prediction or captioning.

(2) a post-training stage in which the model is tuned to follow instructions, align with human preferences, and improve specific capabilities (for example, coding and reasoning).

In Lamma 3 meta tried to optimize for these three levers in our development process:

1. Pre-train Llama 3 on a corpus of about 15T multilingual tokens, compared to 1.8T tokens for Llama 2.

2. pre-trained using 3.8 × 1025 FLOPs, almost 50× more than the largest version of Llama 2.

3. standard dense Transformer model architecture (Vaswani et al., 2017) with minor adaptations, rather than for a mixture-of-experts model (Shazeer et al., 2017) to maximize training stability. Similarly, we adopt a relatively simple post-training procedure based on supervised finetuning (SFT), rejection sampling (RS), and direct preference optimization (DPO; Rafailov et al. (2023)) as opposed to more complex reinforcement learning algorithms (Ouyang et al., 2022; Schulman et al., 2017) that tend to be less stable and harder to scale.

Text extraction and cleaning. We process the raw HTML content for non-truncated web documents to extract high-quality diverse text. To do so, we build a custom parser that extracts the HTML content and optimizes for precision in boilerplate removal and content recall. We evaluate our parser’s quality in human evaluations, comparing it with popular third-party HTML parsers that optimize for article-like content, and found it to perform favorably. We carefully process HTML pages with mathematics and code content to preserve the structure of that content. We maintain the image alt attribute text since mathematical content is often represented as pre-rendered images where the math is also provided in the alt attribute. We experimentally evaluate different cleaning configurations. We find markdown is harmful to the performance of a

De-duplication was used in many ways:

1. URL-level de-duplication
2. Document-level de-duplication
    > Global MinHash (Broder, 1997).
3. Line-level de-duplication
    > ccNet (Wenzek et al., 2019).
    > Remove line which appear more than 6 times in each bucket of 30M documents.
    > From human Logic some sentence got broken due to this, but the model got improved.
4. Heuristic Filtering
    >  duplicated n-gram coverage ratio (Rae et al., 2021) to remove lines that consist of repeated content such as logging or error messages. Those lines could be very long and unique, hence cannot be filtered by line-dedup.
    > “dirty word” counting (Raffel et al., 2020) to filter out adult websites that are not covered by domain block lists.
    > We use a token-distribution Kullback-Leibler divergence to filter out documents containing excessive numbers of outlier tokens compared to the training corpus distribution.

we find that annealing on small amounts of high-quality code and mathematical data can boost the performance of pre-trained models on key benchmarks.

performance gains are primarily driven by improvements in data quality and diversity as well as by increased training scale.

pre-train Llama 3 405B consists of three main stages:

(1) initial pre-training

(2) long-context pre-training

(3) annealing.

Thanks for Reading, Readers are Leaders.

Author - Singh, Rakshit Kr.

Mail - rakshitsingh421@gmail.com

LinkedIn - https://www.linkedin.com/in/rakshit-singh-ai/

X - https://x.com/RSINGH54369249
