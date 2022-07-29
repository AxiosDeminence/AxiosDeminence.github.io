---
permalink: false
tags: project
title: Food-101 Classifier
preview_img: "/project_images/image-101/first_layer.webp"
preview_img_desc: feature maps of model
brief_desc: Different deep learning models based on Pytorch to classify images
    on a subset of the Food-101 dataset.
rank: 5
---
Project Date: **Feb. 2022**

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

##### Short Summary:
School project accomplished during a course on deep networks. The goal was to
see how different architectures and hyperparameters performed on a
classification problem using a subset of the Food-101 dataset. We used Pytorch
in order to perform CUDA-accelerated learning and to import a ResNet (Residual
network) and VGGNet (Visual Geometry Group Network) for fine-tuned training by
replacing the classification layer.

##### Action Points:
* Developed a deep learning model to classify images from the Food-101 dataset
    in a team of three developers
* Used [Pytorch](https://pytorch.org/) to develop a deep learning architecture
    to improve developer experience and accelerate learning
* Leveraged ImageNet models to perform transfer learning to achieve a 66%
    validation accuracy on the Food-101 dataset
* Created a validation pipeline to automate hyperparameter testing over the
    course of 24 hours