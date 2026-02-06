---
title: Existing System Overview
sidebar_position: 1
slug: /talents-mapping/existing-system/overview
description: Documentation for the current legacy system architecture and modules
---

import FeatureCard from '@site/src/components/FeatureCard';
import { FiServer, FiDatabase, FiCode, FiLayers } from 'react-icons/fi';

# Existing System Overview

Dokumentasi ini mencakup spesifikasi teknis untuk sistem yang **sedang berjalan saat ini (Legacy/Current Production)**.

:::info Status: Legacy/Stable
Dokumentasi ini menjelaskan sistem *As-Is*. Untuk rencana pengembangan masa depan, silakan lihat [2026 Q1 Technical Specification](../2026%20Q1%20Technical%20Specification%20Document/1%20-%20Blueprint%20Transformasi%20Arsitektur%20Sistem%20Retai.md).
:::

## Documentation Modules

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <FeatureCard
      icon={FiServer}
      title="System Architecture"
      description="Current monolith architecture, server configuration, and deployment topology."
      link="/docs/talents-mapping/existing-system/system-architecture"
    />
  </div>
  <div className="col col--6 margin-bottom--lg">
    <FeatureCard
      icon={FiDatabase}
      title="Database Schema"
      description="Existing ERD, table structures, and relationships."
      link="/docs/talents-mapping/existing-system/database-schema"
    />
  </div>
  <div className="col col--6 margin-bottom--lg">
    <FeatureCard
      icon={FiCode}
      title="API Documentation"
      description="Legacy API endpoints, authentication, and payload formats."
      link="/docs/talents-mapping/existing-system/api-documentation"
    />
  </div>
  <div className="col col--6 margin-bottom--lg">
    <FeatureCard
      icon={FiLayers}
      title="Business Modules"
      description="Documentation of current business logic and service flows."
      link="/docs/talents-mapping/existing-system/business-modules"
    />
  </div>
</div>
