---
title: 系统总体结构设计
icon: laptop-code
category:
- 设计高频
tag:
  - 高频

---

## 简介

系统设计工作应该自顶向下地进行。首先设计总体结构，然后再逐层深入，直至进行每一个模块的设计。总体设计主要是指在系统分析的基础上，对整个系统的划分（子系统）、机器设备（包括软、硬设备）的配置、数据的存贮规律以及整个系统实现规划等方面进行合理的安排。

## 一、系统设计的任务

1. 系统设计的概念

系统设计又称为物理设计，是开发管理信息系统的第二阶段，系统设计通常可分为两个阶段进行，首先是总体设计，其任务是设计系统的框架和概貌，并向用户单位和领导部门作详细报告并认可，在此基础上进行第二阶段――详细设计，这两部分工作是互相联系的，需要交叉进行，本章将这两个部分内容结合起来进行介绍。

系统设计是开发人员进行的工作，他们将系统设计阶段得到的目标系统的逻辑模型转换为目标系统的物理模型，该阶段得到工作成果――系统设计说明书是下一个阶段系统实施的工作依据。

2. 系统设计的主要内容

系统设计的主要任务是进行总体设计和详细设计。下面分别说明它们的具体内容。

(1) 总体设计

总体设计包括系统模块结构设计和计算机物理系统的配置方案设计。

1. 系统模块结构设计

系统模块结构设计的任务是划分子系统，然后确定子系统的模块结构，并画出模块结构图。在这个过程中必须考虑以下几个问题：

如何将一个系统划分成多个子系统；

每个子系统如何划分成多个模块；

如何确定子系统之间、模块之间传送的数据及其调用关系；

如何评价并改进模块结构的质量。

2. 计算机物理系统配置方案设计

在进行总体设计时，还要进行计算机物理系统具体配置方案的设计，要解决计算机软硬件系统的配置、通信网络系统的配置、机房设备的配置等问题。计算机物理系统具体配置方案要经过用户单位和领导部门的同意才可进行实施。

开发管理信息系统的大量经验教训说明，选择计算机软硬件设备不能光看广告或资料介绍，必须进行充分的调查研究，最好应向使用过该软硬件设备的单位了解运行情况及优缺点，并征求有关专家的意见，然后进行论证，最后写出计算机物理系统配置方案报告。

从我国的实际情况看，不少单位是先买计算机然后决定开发。这种不科学的、盲目的做法是不可取的，它会造成极大浪费。因为，计算机更新换代是非常快的，就是在开发初期和在开发的中后期系统实施阶段购买计算机设备，价格差别就会很大。因此，在开发管理信息系统过程中应在系统设计的总体设计阶段才具体设计计算机物理系统的配置方案。

(2) 详细设计

在总体设计基础上，第二步进行的是详细设计，主要有处理过程设计以确定每个模块内部的详细执行过程，包括局部数据组织、控制流、每一步的具体加工要求等，一般来说，处理过程模块详细设计的难度已不太大，关键是用一种合适的方式来描述每个模块的执行过程，常用的有流程图、问题分析图、IPO图和过程设计语言等；除了处理过程设计，还有代码设计、界面设计、数据库设计、输入输出设计等。

(3) 编写系统设计说明书

系统设计阶段的结果是系统设计说明书，它主要由模块结构图、模块说明书和其它详细设计的内容组成。

## 系统设计的方法与工具

系统设计的工作复杂又细致，总体设计阶段需要进行系统模块结构设计，要将一个大系统分解成不同层次、多个模块组成的系统，在详细设计阶段要在模块结构设计的基础上，给出每个模块实现方法的细节，并对模块的输入、输出和处理过程作详细描述，以便在系统实施阶段进行程序设计时可以把这个描述直接“翻译”成用某种程序设计语言书写的程序。系统设计在技术上有相当的难度，为此需要有一定的设计方法和设计工具来指导。70年代以来，出现了多种设计方法，其中结构化设计方法是较为典型的方法，本章将对该设计方法进行论述并介绍几个常用的设计工具。

## 一、结构化设计的方法

结构化设计（STRUCTURED DESIGN, 简称SD)
方法是使用最广的一种设计方法，由美国IBM公司的W·STEVENS、G·MYERS和·CONSTANTINE等人提出。该方法适合于软件系统的总体设计和详细设计，特别是将一个复杂的系统转换成模块化结构系统，该方法具有它的优势。在使用过程中可将结构化设计方法与结构化分析（SA)
方法及编程阶段的结构化程序设计方法(SP)前后衔接起来，SD方法具有以下特点：

1．相对独立、功能单一的模块结构

结构化设计的基本思想是将系统设计成由多个相对独立、功能单一的模块组成的结构。由于模块之间相对独立，每一模块就可以单独地被理解、编写、测试、排错和修改,从而有效地防止错误在模块之间扩散蔓延，提高了系统的质量(
可维护性、可靠性等)。因此，大大简化了系统研制开发的工作。

2．“块内联系大、块间联系小”的模块性能标准

“模块内部联系要大，模块之间联系要小”，这是结构化设计中衡量模块“相对独立”性能的标准。事实上，块内联系和块间联系是同一件事的两个方面。系统中各组成成分之间是有联系的，若把联系密切的成分组织在同一模块中，块内联系高了，块间联系自然就少了。反之，若把密切相关的一些组成成分分散在各个模块中，势必造成很高的块间联系，这将影响系统的可维护性。所以，在系统设计过程中一定要以结构化设计的模块性能标准为指导。

3．采用模块结构图的描述方式

结构化设计方法使用的描述方式是模块结构图。

## 系统模块结构设计

总体设计的另外一个主要内容是合理地进行系统模块结构的分析和定义，将一个复杂的系统设计转为若干个子系统和一系列基本模块的设计，并通过模块结构图把分解的子系统和一个个模块按层次结构联系起来。下面来介绍如何进行模块的分解、如何从数据流图导出模块结构图以及模块结构图的改进。

#### 一、模块分解的原则和依据

系统逻辑模型中数据流图中的模块是逻辑处理模块，模型中没有说明模块的物理构成和实现途径，同时也看不出模块的层次分解关系，为此在系统结构设计中要将数据流图上的各个逻辑处理模块进一步分解，用模块结构图确定系统的层次结构关系，并将系统的逻辑模型转变为物理模型。

1. “耦合小，内聚大”的基本原则

在结构化设计中，采用自顶向下，逐步细化的方法将系统分解成为一些相对独立、功能单一的模块。如何度量模块之间的独立性呢？

在一个管理信息系统中，系统的各组成部分之间总是存在着各种联系的，将系统或子系统划分成若干模块，则一个模块内部的联系就是块内联系，而穿越模块边界的联系就是块间联系。由于模块之间的互相联系越多，模块的独立性就越少，因此，引入模块耦合和内聚的概念。

耦合表示模块之间联系的程度。紧密耦合表示模块之间联系非常强，松散耦合表示模块之间联系比较弱，非耦合则表示模块之间无任何联系，是完全独立的。

内聚表示模块内部各成分之间的联系程度。

一般说来，在系统中各模块的内聚越大，则模块间的耦合越小。但这种关系并不是绝对的。耦合小使得模块间尽可能相对独立，从而各模块可以单独开发和维护。内聚大使得模块的可理解性和维护性大大增强。因此，在模块的分解中应尽量减少模块的耦合，力求增加模块的内聚。

2. 对子系统或模块进行划分的依据

一个合理的子系统或模块划分，应该是内部联系强，子系统或模块间尽可能独立，接口明确、简单，尽量适应用户的组织体系，有适当的共用性。也就是上面所说的“耦合小，内聚大”。按照结构化设计的思想，对模块或子系统进行划分的依据通常有以下几种：

(1)按逻辑划分，把相类似的处理逻辑功能放在一个子系统或模块里。例如，把“对所有业务输入数据进行编辑”的功能放在一个子系统或模块里。那么不管是库存、还是财务，只要有业务输入数据都由这个子系统或模块来校错、编辑。

(2)按时间划分，把要在同一时间段执行的各种处理结合成一个子系统或模块。

(3)按过程划分，即按工作流程划分。从控制流程的角度看，同一子系统或模块的许多功能都应该是相关的。

(4)按通信划分，把相互需要较多通讯的处理结合成一个子系统或模块。这样可减少子系统间或模块间的通讯，使接口简单。

(5)按职能划分，即按管理的功能。例如，财务、物资、销售子系统，或输入记帐凭证、计算机优解子系统或模块等等。

一般来说，按职能划分子系统，按逻辑划分模块的方式是比较合理和方便的

## 详细设计

进行了系统的总体设计后即可在此基础上进行系统的详细设计了，即各种输入、输出、处理和数据存储等的详细设计。下面分别介绍详细设计的内容。

#### 一、代码设计

代码是用来表示事物名称、属性和状态等的符号。在管理信息系统中，代码是人和机器的共同语言，是系统进行信息分类、校对、统计和检索的依据。代码设计就是要设计出一套能为系统各部门公用的、优化的代码系统，这是实现计算机管理的一个前提条件。

1. 代码设计的原则

代码设计是一项重要的工作，合理的编码结构是使管理信息系统具有生命力的重要因素。设计代码的基本原则是：

(1) 具备唯一确定性。每一个代码都仅代表唯一的实体或属性。

(2) 标准化与通用性。凡国家和主管部门对某些信息分类和代码有统一规定和要求的，则应采用标准形式的代码，以使其通用化。

(3) 可扩充且易修改。要考虑今后的发展，为增加新代码留有余地。当某个代码在条件或代表的实体改变时，容易进行变更。

(4) 短小精悍即选择最小值代码。代码的长度会影响所占据的内存空间、处理速度以及输入时的出错概率，因此要尽量短小。

(5) 具有规律性、便于编码和识别。代码应具有逻辑性强，直观性好的特点，便于用户识别和记忆。

2. 分类方法

目前最常用的分类方案有两种，一种是线分类方法，一种是面分类方法。在实际应用中根据具体情况各有其不同的用途。

线分类方法：首先给定母项，然后下分若干子项，由对象的母项分大集合，由大集合确定小集合，最后落实到具体对象

特点：结构清晰，容易识别和记忆，易查找；适应于手工系统；

缺点：结构不灵活，柔性差。

线分类时要掌握两个原则：唯一性和不交叉性。

例：公司生产组织结构。

面分类方法：它主要从面的角度来考虑分类

面分类的特点：

柔性好，面上的增、删、改很容易；

可实现按任意组配面的信息检索，对机器处理有良好的适应性；

缺点是不易直观识别，不便于记忆。

系统设计报告

系统设计阶段的成果是系统设计报告， 其主要是各种设计方案和设计图表，它是下一步系统实现的基础。

#### 一、系统设计的成果

系统设计阶段的成果归纳起来一般有 (点击这里观看“各开发环节之间的关系”动画演示)：

1.系统总体结构图（包括总体结构图，子系统结构图，计算机流程图等）。

2.系统设备配置图（系统设备配置图： 主要是计算机系统图，设备在各生产岗位的分布图，主机、网络、终端联系图等）。

3.系统分布编码方案（分类方案、编码系统）。

4.数据库结构图（DB的结构，主要指表与表之间的结构，表内部结构（字段、域、数据字典等）。

5.HIPO图（层次化模块控制图、IPO图等等）。

6.系统详细设计方案说明书。

## 二、系统设计说明书的组成

1. 引言

(1) 摘要 系统的目标名称和功能等的说明

(2) 背景

* 项目开发者
* 用户
* 本项目和其它系统或机构的关系和联系

(3) 系统环境与限制

* 硬件、软件和运行环境方面的限制
* 保密和安全的限制
* 有关系统软件文本
* 有关网络协议标准文本

(4) 参考资料和专门术语说明

## 2.系统设计方案

(1) 模块设计

* 系统的模块结构图
* 各个模块的IPO图(包括各模块的名称、功能、调用关系、局部数据项和详细的算法说明等)

(2) 代码设计

各类代码的类型、名称、功能、使用范围和使用要求等的设计说明书

(3) 输入设计

输入项目

输入人员(指出所要求的输入操作人员的水平与技术专长，说明与输入数据有关的接口软件及其来源)

主要功能要求(从满足正确、迅速、简单、经济、方便使用者等方面达到要求的说明)

输入校验(关于各类输入数据的校验方法的说明)

(4) 输出设计

输出项目

输出接受者

输出要求(所用设备介质、输出格式、数值范围和精度要求等)

(5) 文件(数据库)设计说明

概述(目标、主要功能)

需求规定(精度、有效性、时间要求及其它专门要求)

运行环境要求(设备支撑软件，安全保密等要求)

逻辑结构设计(有关文件及其记录、数据项的标识、定义、长度和它们之间的关系)

物理结构设计(有关文件的存贮要求、访问方法、存贮单位、设计考虑和保密处理等)

(6) 模型库和方法库设计(本系统所选用的数学模型和方法以及简要说明)

(7) 安全保密设计

(8) 物理系统配置方案报告

硬件配置设计

通信与网络配置设计

软件配置设计

机房配置设计

(9) 系统实施方案及说明

实施方案

实施计划(包括工作任务的分解、进度安排和经费预算)

实施方案的审批(说明经过审批的实施方案概况和审批人员的姓名)

3.案例

| 序号 | 模块名称	              | 主要用途                                                                                                                                                    |
|----|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | 无线寻呼管理信息系统-系统设计说明书 | 研究开发5-10万用户寻呼机管理信息系统，它可以进行普通寻呼服务；漫游寻呼服务；群呼服务；试机服务；定时服务；系统管理；运行管理。                                                                                       |
| 2  | 库存管理系统-系统设计说明书     | 研发库存控制系统的主要目的:1）为顾客订货提供更好的服务；2）控制库存水平；3）决定向厂家订货的时间和批量。                                                                                                  |
| 3  | 百货商店业务管理信息系统-系统设计  | 实现登记、整理数据，处理核对顾客订货单；向经理提供各种业务统计报表；提供各级查询；销售、采购、会计各部门的业务数据处理实现自动化。                                                                                       |
| 4  | 铁道财务会计管理信息系统-系统设计  | 运用系统的方法以计算机和现代通信技术为基本信息处理手段和工具的，能为全国铁道财务会计核算、管理、决策提供信息服务的人—机系统。                                                                                         |
| 5  | 高校选课辅助决策           | 本选课系统能够使学生在INTERNET上自主、便捷、准确地进行全校性课程选择的一种软件。学生在选择选修课前，可以上网进行查询，当学生输入其学号与密码后，系统便调出其所有相关信息，包括已修课程、已修课程的成绩、专业培养计划、全校性可选课程，系统进行综合分析后，得到一些可行的方案，供选课学生参考，并提出合理建议。 |
| 6  | 条形材料选材优化           | 要制造器件,必须先制造一定的零件,而这些零件又由某种原材料截取而得到。例如：用某一种条形材料锯成数种需要的零件，求最少的用料数量。使用运筹学线性规划的思想和解决方法。                                                                     |

