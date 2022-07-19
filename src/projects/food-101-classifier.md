---
permalink: false
tags: project
title: Food-101 Classifier
preview_img: "/project_images/image-101/first_layer.webp"
preview_img_desc: feature maps of model
brief_desc: Different deep learning models based on Pytorch to classify images
    on a subset of the Food-101 dataset.
---
<section class="project-images">
  <figure>
    <img src="{{ '/project_images/image-101/first_layer.webp' | url }}" />
    <figcaption>
      Feature maps represented in the first layer of our custom architecture
    </figcaption>
  </figure>
  <figure>
    <img src="{{ '/project_images/image-101/valid_acc_res_pft.webp' | url }}" />
    <figcaption>
      Validation accuracy when leveraging ResNet18 for transfer learning.
    </figcaption>
  </figure>
</section>

School project accomplished during a course on deep networks. The goal was to
see how different architectures and hyperparameters performed on a
classification problem using a subset of the Food-101 dataset. We used Pytorch
in order to perform CUDA-accelerated learning and to import a ResNet (Residual
network) and VGGNet (Visual Geometry Group Network) for fine-tuned training by
replacing the classification layer.

* Created validation pipeline to test different set of hyperparameters.
* Used [Pytorch](https://pytorch.org/) with CUDA to accelerate learning on
    models.
* Leveraged already available models trained on ImageNet for transfer learning
    for ~66% validation accuracy on a subset of the Food-101 dataset.