---
title: 框架MVVM
icon: laptop-code
category:
  - 设计框架
tag:
  - 框架

---

## 简介

MVVM是Model-View-ViewModel的简写，它本质上是MVC的改进版。MVVM（Model-View-ViewModel）框架的由来是MVP（Model-View-Presenter）模式与WPF结合的应用方式时发展演变过来的一种新型架构框架。

MVVM是一种用于构建用户界面的软件架构模式，它的名称代表着三个组成部分：Model（模型）、View（视图）和ViewModel（视图模型）。MVVM的主要目标是将应用程序的UI与其底层数据模型分离，通过数据绑定实现数据和UI的自动同步，从而降低代码的耦合度，提高应用程序的可维护性和可测试性。

## 原理

#### Model（模型）

* Model表示应用程序的数据模型或业务逻辑，负责处理数据的存取、处理和操作。它通常包含数据结构、数据库操作、网络请求等。
* Model并不直接与UI层交互，它只暴露一些接口供ViewModel层调用，使得ViewModel可以获取所需的数据。

#### View（视图）

* View是用户界面的可视化部分，负责展示数据并与用户进行交互。
* View通常由XML、HTML、XAML等描述，这取决于具体的开发平台。

#### ViewModel（视图模型）

* ViewModel是Model和View之间的桥梁，负责将数据从Model中取出并转换成View可用的形式。
* ViewModel不直接操作View，而是通过数据绑定机制将数据与View进行绑定，使得数据的变化可以自动反映在View上，实现了数据的双向绑定。
* ViewModel通常也包含用户交互的逻辑，例如处理用户输入、按钮点击等。

#### 数据绑定（Data Binding）

* 数据绑定是MVVM框架的核心特性之一。它将View和ViewModel的数据同步连接，使得它们保持同步。
* 当ViewModel中的数据发生变化时，数据绑定会自动更新View中绑定到这些数据的部分，反之亦然。

#### 双向绑定（Two-way Data Binding）

* 双向绑定是数据绑定的一种扩展，它允许数据的改变能够实时地反映在View中，并且用户在View中的输入也能即时地更新ViewModel中的数据。
* 这种双向绑定在处理表单、用户输入等场景中特别有用。

MVVM的本质是解耦。它通过将UI逻辑从View中分离出来，将数据处理逻辑从View和Model中分离出来，使得每个组件的职责更加明确，代码更易于组织和维护。ViewModel充当着View和Model之间的桥梁，负责将Model中的数据转换成View可用的形式，并且通过数据绑定将数据自动同步到View上。这种双向绑定使得UI的更新变得自动化，开发者只需要专注于数据的处理和业务逻辑的编写，而无需过多关心UI的更新。

## 优缺点

#### 优点

* 低耦合：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"
  上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
* 可重用性：你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
* 独立开发：开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression
  Blend可以很容易设计界面并生成xml代码
* 可测试：界面素来是比较难于测试的，而现在测试可以针对ViewModel来写

#### 缺点

## VUE中的MVVM

在Vue中，MVVM的应用是通过Vue框架提供的功能来实现的。Vue.js是一个流行的JavaScript框架，专注于实现响应式的用户界面和组件化开发。下面是Vue中如何应用MVVM的一些关键点：

#### 数据绑定

Vue.js提供了强大的数据绑定功能，可以通过v-bind和v-model等指令将数据与View进行绑定。v-bind指令用于将数据绑定到View上，v-model指令则可以实现双向数据绑定，使得用户在View中的输入能够即时地更新ViewModel中的数据。

#### 视图模板（View Template）

在Vue中，开发者可以使用类似HTML的模板语法来定义视图，这些模板语法中可以插入Vue实例中的数据，从而实现数据的展示和渲染。

#### Vue实例（ViewModel）

Vue实例充当着ViewModel的角色，它是Vue应用的根实例，负责管理应用中的数据和逻辑。在Vue实例中，开发者可以定义数据、方法和计算属性等，用于处理数据逻辑和响应用户交互。

#### 计算属性和观察者

Vue提供了计算属性和观察者等功能，用于实现数据的处理和监控。计算属性可以根据其他数据的变化自动计算得出新的值，而观察者可以监听数据的变化并执行相应的操作。

#### 组件化开发

Vue支持组件化开发，开发者可以将UI和逻辑封装成可复用的组件。每个组件都有自己的数据和逻辑，通过props和events等机制，实现了组件之间的数据通信和交互。
总的来说，Vue中的MVVM模式是通过数据绑定、视图模板、Vue实例以及计算属性和观察者等特性来实现的。这些功能使得开发者能够轻松地构建响应式的用户界面，并将数据和视图分离，使代码更易于维护和扩展。通过Vue的MVVM特性，开发者可以更专注于业务逻辑的实现，而不用过多关心数据和UI之间的同步。

## MVVM与MVC区别

MVVM（Model-View-ViewModel）和MVC（Model-View-Controller）都是用于构建软件应用的架构模式，它们在组织代码和分离关注点方面有一些不同之处。以下是MVVM和MVC的核心区别：

#### 角色和职责分配

* MVC：在MVC中，Model表示应用程序的数据和业务逻辑，View负责展示数据并与用户进行交互，Controller充当着View和Model之间的中介，负责处理用户输入并更新Model和View之间的数据传递。
*
MVVM：在MVVM中，Model同样表示应用程序的数据和业务逻辑，View仍然负责展示数据并与用户进行交互，但ViewModel取代了Controller的角色，它充当着View和Model之间的桥梁，负责将Model中的数据转换成View可用的形式，并通过数据绑定实现数据的同步更新。

#### 数据绑定

* MVC：在MVC中，View和Model之间通常没有直接的数据绑定机制，通常需要手动编写代码来同步更新数据。
* MVVM：MVVM的一个重要特点是数据绑定。ViewModel和View之间通过数据绑定实现数据的双向绑定，使得数据的变化能自动反映在View上，并且用户在View中的输入也能即时地更新ViewModel中的数据。

#### UI逻辑

* MVC：在MVC中，UI逻辑通常存在于View和Controller中，Controller负责处理用户输入和业务逻辑，并将更新后的数据传递给View进行显示。
* MVVM：在MVVM中，UI逻辑主要存在于ViewModel中，View只负责展示数据，而不包含业务逻辑。ViewModel负责处理用户交互、按钮点击等，以及数据的转换和处理逻辑。

#### 应用场景

* MVC：MVC适用于许多应用场景，包括Web应用程序、传统的桌面应用程序等。
* MVVM：MVVM主要用于现代前端和移动应用程序开发，特别适用于响应式的用户界面和数据驱动的应用。

总的来说，MVVM和MVC的核心区别在于ViewModel的引入和数据绑定机制。MVVM通过引入ViewModel来实现数据和UI的自动同步，从而降低了代码的耦合度和提高了应用程序的可维护性。数据绑定是MVVM的重要特性，使得数据的双向绑定在处理用户输入和更新UI方面变得更加高效和方便。


