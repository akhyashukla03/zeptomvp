# ⚡ Zepto Cross-Category Discovery Engine & MVP
> **Growth PM Graduation Project** | Solving Routine Grocery Lock-in & Driving Non-Grocery Exploration

![Zepto Growth PM Portal](https://img.shields.io/badge/Zepto-Growth%20PM-8224e3?style=for-the-badge&logo=appveyor)
![Status](https://img.shields.io/badge/Status-Production%20Ready-22c55e?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-ffd700?style=for-the-badge)

---

## 📌 Executive Summary

Quick-commerce platforms like **Zepto, Blinkit, and Instamart** have successfully captured users' daily routines. However, customer purchasing behavior quickly becomes **highly repetitive**:
* **71.2%** of active users repeatedly purchase daily grocery staples (Milk, Eggs, Bread) in fast <45-second checkout flows.
* **<8.2%** of Monthly Active Customers (MAC) explore high-margin non-grocery categories (*Personal Care, Pet Supplies, WFH Gadgets, Household Utilities*).
* **Margin Cliff**: Groceries yield low ~10% gross margins vs **35%–50%** for Personal Care & Pet Care.

This repository contains the end-to-end **AI-Powered PM Discovery Engine, Primary Research Scorecard, Interactive Prototype Simulator, and 10-Slide Submission Pitch Deck** designed to solve category tunnel vision.

---

## 🚀 Key Project Deliverables

| Deliverable | Description | Direct File Link |
| :--- | :--- | :--- |
| 📊 **Official Presentation PDF** | Widescreen 16:9 10-Slide Graduation Pitch Deck (Vector PDF) | [`Zepto_Growth_PM_Graduation_Project.pdf`](Zepto_Growth_PM_Graduation_Project.pdf) |
| 📈 **Editable PowerPoint Deck** | 10-Slide Microsoft PowerPoint Presentation File (.pptx) | [`Zepto_Growth_PM_Graduation_Project.pptx`](Zepto_Growth_PM_Graduation_Project.pptx) |
| 🌐 **Interactive Web Portal** | Full-Featured Web Application & Guided PM Tour Engine | [`index.html`](index.html) |
| 🧠 **Scraped Customer Reviews** | 2,000 Structured Feedback Records across 10 Social Channels | [`data/reviews_dataset.json`](data/reviews_dataset.json) |
| 📋 **Pitch Deck Data Schema** | Structured JSON Data Schema for 10-Slide Pitch Presentation | [`data/deck_content.json`](data/deck_content.json) |
| 📝 **Stealth Research Form** | Masked Google Apps Script Survey Generator for Primary Research | [`create_google_form.js`](create_google_form.js) |

---

## 🧠 Part 1: AI-Powered PM Discovery Engine

Our automated discovery engine ingested and processed **2,000 multi-platform social customer feedback records** across 10 distinct channels:
1. **Google Play Store**: App reviews & ratings
2. **Apple App Store**: iOS user feedback
3. **Reddit (`r/bangalore`)**: Local metro community threads
4. **Reddit (`r/india`)**: National consumer discussions
5. **Twitter / X**: Real-time customer complaints & praise
6. **Quora**: Long-form e-commerce & shopping behavior threads
7. **MouthShut**: Product & store service review forum
8. **LinkedIn**: Professional tech & retail teardowns
9. **ProductHunt**: App UX & feature feedback
10. **Trustpilot**: Logistics & dark store delivery ratings

### Core Findings & Barriers Identified:
* **Quality & Expiry Fear (20.1%)**: Customers fear active skincare ingredients or food items degrade in hot dark stores.
* **Bulk Buy Mismatch (19.9%)**: Preference for buying diapers & pet food in bulk on DMart or Amazon.
* **Ecological Guilt (15.3%)**: Friction around single-item plastic packaging waste and rider trips.
* **Dark Pattern Fatigue (15.9%)**: Annoyance with checkout rain fees and tip popups.

---

## 👥 Part 2: Primary Research & Live Cohort Validation

We validated our AI discovery findings through **5 Metro User Interviews** and an expanded **N=22 Live Audience Survey**:
* **82%** Power-User Frequency (order 1–4+ times/week).
* **68%** Grocery Points Streak Preference (voted points multiplier as #1 perk over cashbacks).
* **50%** Return & Refund Anxiety (chatbot refund loops identified as top buying blocker).
* **91%** Rated 15-Min Doorstep Swap Guarantee at 3.0–5.0 trust boost score.
* **36%** Validated B2B Free Sampling as top trial trigger.

---

## 📱 Part 3 & 4: The AI-Native MVP Simulator

The MVP is built as a simulated mobile shopping cart experience featuring:

1. **🎁 Zepto Discovery Pass & B2B Free Sampling Carousel**:
   * Subscribers claim 1 free 15ml trial sample (*Cetaphil Cleanser, Pedigree Dentastix, Portronics Cable*) riding inside regular grocery bags at **Rs. 0**.
   * Dynamically prioritizes the relevant category sample based on active customer persona.

2. **🏆 Category Streak Board (5-Sticker Loyalty Quest)**:
   * Tracks exploration across 5 category stickers (🥛 Pantry, 🍿 Snacks, 💄 Beauty, 🐾 Pets, 🔌 Utility).
   * Unlocks **2x Grocery Points** on daily milk/bread staples when non-grocery categories are added.

3. **🔍 AI Co-Pilot Activation Widgets**:
   * **SkinMatch AI**: Undertone camera selfie scanner for shade matching.
   * **DeviceLink**: Auto-detects phone model for compatible charging accessories.
   * **PetCare Profile**: Matches cat/dog nutrition requirements.

4. **📦 Model B Live Dark-Store Storage Audit & CCTV Snapshot**:
   * Surfaces live dark-store IoT temperature logs (18.2°C) & overhead rack CCTV camera snapshots to eliminate product expiry fears (**AWS S3 lifecycle storage cost ~$15/month**).

5. **🏷️ DISCOVERY100 Voucher Integration**:
   * Post-trial nudge unlocking Rs. 100 off full-sized products in new categories.

---

## 📊 Opportunity Sizing & Financial Model

* **TAM**: **$18.0B** — Total Indian Quick Commerce Market Projection by 2028 (42% CAGR).
* **SAM**: **$4.2B** — Non-Grocery Quick Commerce Penetration Potential.
* **SOM**: **$480M** — Zepto Cross-Category Discovery Capture Opportunity.
* **North Star Metric**: **Monthly Category Exploration Rate (MCER)** — Target progression from **8.2% ➔ 28.4%** in 12 months.

---

## 🛠️ Installation & Local Setup

### Running the Web Application Locally:
```bash
# 1. Clone the repository
git clone https://github.com/akhyashukla03/zeptomvp.git

# 2. Change into project directory
cd zeptomvp

# 3. Launch local Python HTTP server
python -m http.server 8080
```
Open **`http://localhost:8080`** in your browser to test the interactive portal!

---

## 🚀 Streamlit Cloud & Live Production Deployment

### 1. Deploying to Streamlit Community Cloud (https://streamlit.io):
1. Sign in to **[share.streamlit.io](https://share.streamlit.io)** using your GitHub account.
2. Click **"New App"**.
3. Select your repository: **`akhyashukla03/zeptomvp`**.
4. Set Main file path: **`streamlit_app.py`** (or **`app.py`**).
5. Click **"Deploy!"**. Streamlit will automatically install `requirements.txt` and launch your live application URL!

### 2. Running Streamlit App Locally:
```bash
python -m streamlit run streamlit_app.py
```

### 3. Alternative 1-Click Static Deployments:
* **Netlify**: Drag & drop folder to [app.netlify.com/drop](https://app.netlify.com/drop).
* **Vercel**: Import repository at [vercel.com/new](https://vercel.com/new).
* **GitHub Pages**: Enable Pages in Repository Settings ➔ Pages.

---

## 📄 License & Attribution

Created as an academic **Growth Product Manager Graduation Project**. All prototype UI designs, data pipelines, and slide deliverables are designed for academic submission.
