---
sidebar_position: 1
title: Talents Mapping Overview
description: Comprehensive overview of the 2026 Q1 Technical Specifications and Architecture
slug: /talents-mapping/overview
---

import FeatureCard from '@site/src/components/FeatureCard';
import { FiLayers, FiDatabase, FiActivity, FiCpu } from 'react-icons/fi';

# Talents Mapping Overview

Welcome to the **Talents Mapping** technical documentation hub. This section serves as the central repository for the **2026 Q1 Technical Specification Document**, detailing the architectural transformation, disparate system integration, and retail module specifications.

:::info Confidential
This entire section is **protected**. Access is restricted to authorized personnel with the correct security clearance key.
:::

## Core Documentation Structure

The documentation is organized into three primary pillars supporting the architectural transformation:

<div className="features-grid">
  <div className="row">
    <div className="col col--6 margin-bottom--lg">
      <FeatureCard
        icon={FiLayers}
        title="System Architecture"
        description="Comprehensive blueprints for the Retail System transformation and Standalone Architecture Design (SAD)."
        link="/docs/talents-mapping/2026-q1-technical-specification-document/2 - system-architecture-design-sad"
      />
    </div>
    <div className="col col--6 margin-bottom--lg">
      <FeatureCard
        icon={FiCpu}
        title="Product Retail Modules"
        description="Technical specs for Product Pricing Engine, Upgrading Mechanisms, and Tiering Logic."
        link="/docs/talents-mapping/2026-q1-technical-specification-document/arsitektur/module-product-retail/konsep-dasar"
      />
    </div>
    <div className="col col--6 margin-bottom--lg">
      <FeatureCard
        icon={FiDatabase}
        title="Data & Commission"
        description="ERD Schemas, Commission Logic, and Proportional Distribution algorithms."
        link="/docs/talents-mapping/2026-q1-technical-specification-document/arsitektur/module-product-retail/erd-commission"
      />
    </div>
    <div className="col col--6 margin-bottom--lg">
      <FeatureCard
        icon={FiActivity}
        title="GAP Analysis"
        description="Analysis of existing architectural gaps and the fundamental concepts for the new system."
        link="/docs/talents-mapping/2026-q1-technical-specification-document/arsitektur/gap/komisi-gap-komisi"
      />
    </div>
  </div>
</div>

## Technical Roadmap (2026 Q1)

This documentation covers the strategic technical initiatives for Q1 2026, focusing on:

1.  **Transformasi Arsitektur**: Moving from legacy monolithic structures to a modular, scalable retail architecture.
2.  **Product Pricing Engine**: Implementation of a dynamic pricing and distribution engine.
3.  **Commission System Overhaul**: Redesigning the commission structure with new ERD and calculation logic.

## Key Resources

- **[Blueprint Transformasi](/docs/talents-mapping/2026-q1-technical-specification-document/blueprint-transformasi-arsitektur-sistem-retai)**: The high-level vision and execution plan.
- **[Konsep Dasar](/docs/talents-mapping/2026-q1-technical-specification-document/arsitektur/module-product-retail/konsep-dasar)**: Fundamental concepts driving the module design.
- **[Report Templates](/docs/talents-mapping/2026-q1-technical-specification-document/resource/report-pdf-template)**: Standardized templates for reporting and data output.

---

> **Note**: Please ensure you review the **[Dasar Perubahan Konsep](/docs/talents-mapping/2026-q1-technical-specification-document/arsitektur/dasar-perubahan-konsep)** before proceeding to specific module implementation guides.
