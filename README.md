# 📦 StockMaster — Modular Inventory Management System

<div align="center">

![StockMaster Logo](https://img.shields.io/badge/StockMaster-Inventory%20Management-purple?style=for-the-badge)

**From Chaos to Clarity.**

A complete, production-ready inventory management system built with modern web technologies.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage-guide) • [API](#-api-endpoints) • [Architecture](#-technical-architecture) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Technical Architecture](#-technical-architecture)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Stock Movement Logic](#-stock-movement-logic)
- [Security](#-security)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**StockMaster** is a comprehensive, modular inventory management system designed to digitize and streamline all stock-related operations within a business. It replaces manual registers, Excel sheets, and scattered tracking methods with a centralized, real-time, easy-to-use application.

### Target Users

- 📊 **Inventory Managers** — Manage incoming & outgoing stock operations
- 🏭 **Warehouse Staff** — Perform transfers, picking, shelving, and counting
- 👔 **Business Owners** — Monitor stock levels and operational efficiency

### Key Benefits

- ✅ Centralized digital inventory system
- ✅ Real-time stock level updates
- ✅ Automated stock movement tracking
- ✅ Multi-warehouse support
- ✅ Complete audit trail of all operations

---

## 🚀 Problem Statement

Traditional inventory management faces several challenges:

- ❌ Manual record-keeping prone to errors
- ❌ Scattered data across multiple Excel sheets
- ❌ No real-time visibility of stock levels
- ❌ Difficulty tracking stock movements
- ❌ Time-consuming physical counts and reconciliation

**StockMaster solves these problems by providing:**

- ✅ Centralized digital inventory system
- ✅ Real-time stock level updates
- ✅ Automated stock movement tracking
- ✅ Multi-warehouse support
- ✅ Complete audit trail of all operations

---

## ✨ Features

### 1. 🔐 Authentication System
- User Signup & Login — Secure account creation
- OTP-based Password Reset — Forgot password recovery
- JWT Token Authentication — Secure session management
- Protected Routes — Role-based access control

### 2. 📊 Dashboard
- **KPI Cards:** Total Products, Low Stock Items, Pending Receipts, Pending Deliveries, Internal Transfers
- **Dynamic Filters:** By document type, status, warehouse, location, product category
- **Quick Actions:** One-click access to all major operations

### 3. 📦 Product Management
- Create/Update Products with Name, SKU, Category, Unit of Measure, Reorder Point
- Stock visibility per location
- Category management
- Low stock alerts

### 4. 🚚 Operations Management

#### A. Receipts (Incoming Stock)
- Create receipt documents
- Add supplier information
- Add products with quantities and locations
- Save as draft → Validate → Stock automatically increases

#### B. Deliveries (Outgoing Stock)
- Create delivery orders
- Add customer information
- Add products with quantities and locations
- System checks availability → Validate → Stock automatically decreases

#### C. Internal Transfers
- Move stock between locations
- Warehouse to Warehouse, Rack to Rack, Storage to Production Floor
- Source availability check → Validate → Stock moves

#### D. Inventory Adjustments
- Reconcile physical counts with system records
- Enter physical count → System calculates difference
- Add reason → Stock automatically adjusted

### 5. 📜 Move History (Stock Ledger)
- Complete audit trail of all stock movements
- Filter by movement type, product, date range, location
- Export functionality

### 6. ⚙️ Settings
- Warehouse Management — Create/edit warehouses and locations
- User Profile — Update personal information and password
- System Information — Version details, database status

---

## 🏗️ Technical Architecture

### Tech Stack

#### Frontend
| Technology | Purpose |
| :--- | :--- |
| React 18.3 + TypeScript | UI Framework |
| Tailwind CSS 3.4 + Shadcn-ui | Styling & Components |
| React Router v6 | Navigation |
| React Context API | State Management |
| Vite 5.4 | Build Tool |

#### Backend
| Technology | Purpose |
| :--- | :--- |
| Node.js 18+ | Runtime |
| Express 5.1 | Web Framework |
| JWT + bcrypt | Authentication |
| RESTful API | API Style |

#### Database
| Technology | Purpose |
| :--- | :--- |
| PostgreSQL 14+ | RDBMS |
| node-postgres (pg) | Driver |
| ACID Compliant | Transactions |

### Project Structure
