# Software Requirements Specification
## For {{Quickelt App}}

Version 0.1  
Prepared by {{IsiahJordan}}   
{{11/12/2025}}

## Table of Contents
<!-- TOC -->
* [1. Introduction](#1-introduction)
    * [1.1 Document Purpose](#11-document-purpose)
    * [1.2 Product Scope](#12-product-scope)
    * [1.3 Definitions, Acronyms, and Abbreviations](#13-definitions-acronyms-and-abbreviations)
    * [1.4 References](#14-references)
    * [1.5 Document Overview](#15-document-overview)
* [2. Product Overview](#2-product-overview)
    * [2.1 Product Perspective](#21-product-perspective)
    * [2.2 Product Functions](#22-product-functions)
    * [2.3 Product Constraints](#23-product-constraints)
    * [2.4 User Characteristics](#24-user-characteristics)
    * [2.5 Assumptions and Dependencies](#25-assumptions-and-dependencies)
    * [2.6 Apportioning of Requirements](#26-apportioning-of-requirements)
* [3. Requirements](#3-requirements)
    * [3.1 External Interfaces](#31-external-interfaces)
    * [3.2 Functional](#32-functional)
    * [3.3 Quality of Service](#33-quality-of-service)
    * [3.4 Compliance](#34-compliance)
    * [3.5 Design and Implementation](#35-design-and-implementation)
    * [3.6 AI/ML](#36-aiml)
* [4. Verification](#4-verification)
* [5. Appendixes](#5-appendixes)
<!-- TOC -->

## Revision History

| Name | Date | Reason For Changes | Version |
|------|------|--------------------|---------|
|IsiahJordan      |11/12/2025      |Initial Requirements                    | 0.1.0 |
|IsiahJordan      |11/17/2025      |Continue Requirements                    | 0.1.0 |
|IsiahJordan      |11/17/2025      |Define Initial Requirements                    | 0.1.0 |


## 1. Introduction
➥ Quicklet is an web application build using Javascript and Python, that helps learners to create or take quizzes and share their creation with the community.

### 1.1 Document Purpose
➥ The document is designed for other developers to fork the project and mold it in their own vision or users who wishes to understand the details of what the project is supposed to provide.

➥ For anyone who wanted to maintain the project and continue to develop new features after the original goal was accomplished.

### 1.2 Product Scope
➥ Quicklet App V1.0.0

➥ Quicklet should provide users the ability to create quizzes and set the visibility either from public or private.

➥ Quicklet should be able to create bundles of quizzes to create a classroom.

➥ Quicklet should provide users the ability to take quizzes or join classrooms.

➥ Quicklet should provide the users KPI's of their result from a quiz or class.

### 1.3 Definitions, Acronyms, and Abbreviations
| Term | Definition                                                                                                                   |
|------|------------------------------------------------------------------------------------------------------------------------------|
| API (Architecture)  | A server that manages other additional sets of features to the backend     |
| API (Concept)  | Application Programming Interface - A set of definitions and protocols for building and integrating application software     |
| Framework Stack or Stack   | Development technologies used to develop the product                      |
| Server | Is a project folder that contains the communication model between database and business logic |
| SRS  | Software Requirements Specification - A document that describes the intended purpose, requirements, and nature of a software |
| UI   | User Interface - The visual part of computer application through which a user interacts with a software                      |
| User   | Any person or application interacting with the system UI or/and API                      |

### 1.4 References
➥ **SRS-Template(jam01)**  [Link to Github Repo](https://github.com/jam01/SRS-Template.git)

### 1.5 Document Overview
➥ The following document would cover the Quicklets app background and context for the production. After that, the next section follows the requirements that are required to be integrated and tested during then after development. 
To verify the success of each individual requirements, the proceeding section will comprise of different metrics of compliance. Lastly, the document will then cover additional appendixes for more visual context of the project specification.

➥ The practices that will be stricly followed when modifying contents of the specification are of the following: during initial screening, after finishing a single requirement fully, maintinance, or/and re-evaluation of the development cycle. 

## 2. Product Overview

### 2.1 Product Perspective
➥ The product originated as a general use-case of the **acpa** project where the initial dependencies of classroom, quiz and metric based features are added with an additional community based interaction over career based result.
This is an **upstream open source** system and for the ownership of the product, should always start with the accredited of the original owner and **SHOULD NOT RESTRICT EXTERNAL ADDITION** to the list.

### 2.2 Product Functions
➥ Create and manage test

➥ Create and manage rooms

➥ Generate statistical metrics

➥ Send and received feedbacks

➥ Dashboard for user and admin

### 2.3 Product Constraints
➥ Must be deployed as a website and requires a host to maintain availability.

➥ Must use the following technology stack that consist of **Postgresql**, **React**, **ExpressJS & FastAPI**, and **NodeJS** (PREN)

➥ Must integrate **Docker** to deploy the project.

### 2.4 User Characteristics
➥ **student-** interacts with other users through comments and answer or make quizes/rooms.
➥ **admin-** updates the database and monitor changes.

### 2.5 Assumptions and Dependencies
➥ Project architecture assumes the monolithic application. **Client**, **Server**, and **API** are the main modules for application. Client would consist of **ReactJS** while **Express JS & NodeJS** for server and **FastAPI** to API.

➥ Project assumes dependencies on **Tailwindcss**, **ThreeJS**, and **GSAP** for frontend libraries. While additional dependencies relies of **vitest** to unit test application and **storyboard** to design components.

➥ Project assumes dependencies on **Tailwindcss**, **ThreeJS**, and **GSAP** for frontend libraries. While additional dependencies relies of **vitest** to unit test application and **storyboard** to design components.

## 3. Requirements

### 3.1 External Interfaces
💬 _Specifies all external inputs and outputs, covering both required and provided interfaces._

➥ Provide interface definitions sufficient for implementation and test.

💡 Tips:
- Use interface control documents or schemas where appropriate and reference them here.

#### 3.1.1 User Interfaces
💬 _Describes how users interact with the system at a logical level._

➥ Define UI elements, flows, and standards to be followed (style guides, accessibility guidelines). Include layout constraints, common controls (e.g., help, search), keyboard shortcuts, error/empty-state behavior, and localization. Keep visual designs in a separate UI specification and reference them.

💡 Tips:
- Reference accessibility standards (e.g., WCAG) and platform-specific guidelines.
- Consider organizing into subcategories for clarity: Usability/Accessibility (inputs/outputs and dialogs to fit user abstractions, abilities, and expectations), and Convenience.

#### 3.1.2 Hardware Interfaces
💬 _Details interactions with physical devices and platforms._

➥ Specify (un)supported device types, data/control signals, electrical or mechanical characteristics if relevant, and communication protocols. Include timing, throughput, and reliability expectations.

💡 Tips:
- Reference applicable hardware specs and certification requirements.

#### 3.1.3 Software Interfaces
💬 _Defines integrations with other software components and services._

➥ List connected systems (name and version), required or provided services/APIs, data items/messages exchanged, communication styles/protocols, and limit/error/timeout semantics. Identify shared data and ownership.

💡 Tips:
- Capture versioning and backward compatibility policies.
- Define authentication/authorization expectations for each integration.

### 3.2 Functional
💬 _Specifies the externally observable behaviors and functions the software shall provide._

```markdown
- ID: REQ-FUNC-001
- Title: Sign Up Page
- Statement: The system shall create a user and encrypt password
- Rationale: To have an account accessing the application contents
- Acceptance Criteria: Reflection to the database and properly secured password
- Verification Method: Test
```

```markdown
- ID: REQ-FUNC-002
- Title: Sign In Page
- Statement: The system shall login to existing account and received authorization token
- Rationale: To proceed into the application with correct authority.
- Acceptance Criteria: Proper access to authorized routes and denial of non authorized, correct data verification to account in database.
- Verification Method: Test
```

```markdown
- ID: REQ-FUNC-003
- Title: Toast UI
- Statement: The system shall have success, warning, and error messages as prompt.
- Rationale: To make websites easier to debug and to notify users more generally to any interactions.
- Acceptance Criteria: Responsive on desktop and mobile, shall prompt swiftly around 100ms strictly after the call and 3 seconds displaying.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-004
- Title: Input Box UI
- Statement: The system shall implement a general input box design for: password, textbox, search, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-005
- Title: Button UI
- Statement: The system shall implement a general button design for: dropdown, checkbox, radio button, and standard
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of button is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-006
- Title: Form Layout UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-007
- Title: Navigation Bar UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-008
- Title: Routes Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-009
- Title: Proteted Route Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-010
- Title: Forget Password Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-011
- Title: Carousel UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-012
- Title: Timer UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-013
- Title: Progress Bar UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-014
- Title: Slider UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-015
- Title: User Statistic Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-016
- Title: Card UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-017
- Title: Table UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-018
- Title: Profile Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-019
- Title: Search Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-020
- Title: Feedback Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-021
- Title: Feedback Message UI
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-022
- Title: Feedback Message Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-023
- Title: Expand Image Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-024
- Title: Favourite Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-025
- Title: Filter Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-026
- Title: Auth Home Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-027
- Title: Quiz Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-028
- Title: Room Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-029
- Title: List Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-030
- Title: Quiz Details Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-031
- Title: Room Details Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-032
- Title: Image Upload Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-033
- Title: Blog Service
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-034
- Title: Create Room Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-035
- Title: Create Room Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-036
- Title: Create Quiz Page
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

```markdown
- ID: REQ-FUNC-037
- Title: Create Quiz Feature
- Statement: The system shall implement a general input box design for: password, textbox, code, and email.
- Rationale: To reuse components with flexibility in variety.
- Acceptance Criteria: Responsive on desktop and mobile, must stricly maintain properties dependent on what type of input box is being used.
- Verification Method: Test & Analyze
```

➥ Organize functional requirements by feature, use case, or service. For each, describe triggers/inputs, processing/logic (at a black-box level), outputs, and error conditions. For AI behaviors, define determinism bounds (e.g., temperature), refusal criteria, safety rules, and human review points.

💡 Tips:
- Include edge cases and negative scenarios for completeness.
- For AI features, include fallback behaviors and thresholds for abstention.

### 3.5 Design and Implementation
💬 _Constraints or mandates affecting how the solution is designed, deployed, and maintained._

#### 3.5.1 Installation
💬 _Ensures the software runs smoothly in its target environments._

➥ Define (un)supported platforms/environments, prerequisites, installation methods, environment configuration (e.g., env vars, secrets), and rollback/uninstall procedures.

💡 Tips:
- Detail automation expectations (e.g., IaC, installer scripts, container images).
- Keep scaling mechanics (topology, multi-region) in 3.5.3 Distribution; keep scaling targets in 3.3 QoS.

#### 3.5.2 Build and Delivery
💬 _Defines the controls for building, packaging, and delivering software artifacts to ensure integrity, traceability, and reproducibility._

➥ Define how source code is transformed into deployable artifacts and moved through environments. Describe expectations for build reproducibility, dependency management, licensing, configuration management, artifact verification, and release promotion.

💡 Tips:
- Cross-reference 3.5.1 Installation and 3.5.10 Change Management for environment setup, versioning, and release traceability.
- Avoid operational topology details (those belong in 3.5.3 Distribution).

#### 3.5.5 Reusability
💬 _Encourages leveraging components across products or contexts when appropriate._

➥ Identify components intended for reuse and any constraints on their dependencies or technology choices. Specify modularization, API stability, packaging, and documentation to enable reuse.

#### 3.5.6 Portability
💬 _Ability to run on multiple platforms or environments with minimal changes._

➥ Specify (un)supported operating systems, hardware architectures, cloud providers, or container runtimes. Define abstraction layers, configuration policies, and externalization of environment-specific settings.

#### 3.5.9 Proof of Concept
💬 _Validates feasibility and de-risks critical assumptions before full-scale delivery._

➥ Define the objectives, scope, success criteria, and timebox for any POCs. Describe what will be validated (technical, usability, performance) and how results will influence requirements or design.

💡 Tips:
- Keep POCs narrowly focused and measurable. Focus on validation goals, not implementation details.

