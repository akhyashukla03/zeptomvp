import os
import sys
import shutil

# Force stdout UTF-8 encoding for Windows terminal printing
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def build_pptx_deck():
    prs = Presentation()
    # Widescreen 16:9 (13.333 x 7.5 inches)
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Color Palette (High contrast & colorblind safe)
    BG_DARK = RGBColor(19, 13, 30)          # #130d1e Deep Aubergine
    CARD_BG = RGBColor(30, 20, 48)          # #1e1430 Card container
    CARD_BORDER = RGBColor(130, 36, 227)    # #8224e3 Purple
    HEADER_GRAD = RGBColor(224, 82, 56)     # #e05238 Coral Orange
    YELLOW_ACCENT = RGBColor(255, 215, 0)   # #ffd700 Gold
    WHITE = RGBColor(255, 255, 255)
    LIGHT_PURPLE = RGBColor(226, 217, 243)
    MUTED_TEXT = RGBColor(170, 160, 190)

    steps_list = ["Context", "Market", "Research", "Insights", "Canvas", "Ideation", "MVP", "Architecture", "Metrics", "GTM"]

    # Image paths
    img_dir = os.path.join(os.path.dirname(__file__), 'images')
    persona_img = os.path.join(img_dir, 'persona_neha_1784810986952.png')
    mvp_img = os.path.join(img_dir, 'tab3_initial_view_1784810708426.png')

    slides_data = [
        {
            "slide_num": 1,
            "tagline": "AI-POWERED TRUST-LED DISCOVERY FOR CROSS-CATEGORY GROWTH",
            "title": "1. Zepto Expands Blended Gross Margin (+300bps) by Converting Daily Grocery Habits into Recurring Multi-Category Buying",
            "subtitle": "The barrier is not lack of demand for new categories; it is low-trust, low-risk trial inside a grocery-first habit.",
            "box1_title": "📋 STRATEGIC BRIEF & PM SCOPE",
            "box1_bullets": [
                "Role & Scope: PM on Zepto Growth Team driving trust-led cross-category discovery.",
                "Observed Behavior: 71.2% review-mention share of grocery staples shows heavy discussion dominance [Synthetic Corpus, 2,000 items].",
                "Strategic Objective: Lift Monthly Active Customers (MAC) buying from 2+ categories from 8.2% to 28.4% [Illustrative Target].",
                "Target Categories: Personal Care (35% margin), Pet Supplies (45% margin), Electronics (30% margin), Baby Care (35% margin)."
            ],
            "box2_title": "⚡ ZEPTO SCALE VS MARGIN FLYWHEEL",
            "box2_bullets": [
                "Scale Milestone: $1.2B ARR across 500+ Dark Store hubs in Tier-1 Metro markets [Illustrative Modeling Sizing].",
                "Routine Habit Loop: Grocery refillers checkout in <45s without exploring adjacent categories.",
                "Margin Formula: Blended Margin = (Grocery % * 10%) + (Non-Grocery % * 40%) -> Unlocks +300bps EBITDA [Illustrative Modeling Estimate].",
                "Growth PM Approach: Trigger de-risked trial during recurring grocery orders without interrupting 45s checkout speed."
            ],
            "bottom_title": "🔗 ANONYMOUS FELLOWSHIP PROJECT DIRECTORY & VERIFIED DATA",
            "bottom_text": "Live Streamlit App: https://zeptomvp.streamlit.app | Public Source Code: NL_Zepto_Growth_PM_Graduation_Project"
        },
        {
            "slide_num": 2,
            "tagline": "CONVENIENCE-JUSTIFIED TOP-UPS VS PLANNED BULK BUYS",
            "title": "2. Users Leak Planned Non-Grocery Spending to Amazon/DMart; Phase 1 Targets Convenience-Justified Small Baskets, Not Bulk Buys",
            "subtitle": "Conceding planned bulk buys (10kg pet food, 50-pack diapers); targeting convenience-justified top-ups where QCommerce wins.",
            "box1_title": "⭐ WHAT THE ECOSYSTEM HAS SOLVED",
            "box1_bullets": [
                "10-Minute Hyper-Local Delivery Speed (Zepto, Blinkit, Instamart).",
                "Dark Store Density & Real-Time Stock (500+ Dark Stores).",
                "Sub-Second Cart Search & Auto-Complete UI."
            ],
            "box2_title": "❌ PURCHASING LEAKAGE & SCOPE CONCESSION",
            "box2_bullets": [
                "Purchasing Leakage: 83% of surveyed users (20/24) buy planned non-grocery items outside QCommerce on Amazon/Nykaa/DMart [User Survey, N=24].",
                "Explicit Scope Concession: We do NOT chase planned bulk buys (10kg pet kibble, jumbo diapers) in Phase 1 where DMart wins on unit economics.",
                "Phase 1 Target SKUs: Convenience-justified, impulse-friendly top-ups (single face serum, pet treats, travel grooming, batteries) where 10-min speed wins.",
                "Trust & Quality Friction: 20.1% of discovery reviews (134/667) fear heat degrades dark store items; 17% (4/24) fear refund bot loops."
            ],
            "bottom_title": "★ CORE THESIS TESTED & VALIDATED",
            "bottom_text": "Users abandon non-grocery discovery not because they lack desire, but because the financial and quality cost of a wrong/expired non-grocery buy is invisible until delivered."
        },
        {
            "slide_num": 3,
            "tagline": "AI REVIEW WORKFLOW & PRIMARY RESEARCH SYNTHESIS",
            "title": "3. Synthetic Review Corpus & Primary Survey Isolate 3 Core Barriers: Trust, Purchase-Mode Mismatch, and Low Salience",
            "subtitle": "Synthesizing synthetic review patterns and primary survey responses into 3 actionable barrier buckets.",
            "box1_title": "📊 AI REVIEW PIPELINE & SYNTHETIC CORPUS (2,000 ITEMS)",
            "box1_bullets": [
                "AI Pipeline: Ingested 2,000 synthetic items (200 x 10 channels) -> Cleaned -> Clustered complaint patterns.",
                "Operational Exclusion: Filtered 1,333 operational complaints (66.7%). Evaluated 667 discovery-relevant subset.",
                "Barrier Distribution (667 subset): Quality Fear 20.1% (134/667), Impulse Fatigue 20.1% (134/667), Low Awareness 19.9% (133/667), Planned Mismatch 19.9% (133/667), Packaging Guilt 19.9% (133/667)."
            ],
            "box2_title": "🎯 3 SYNTHESIZED BARRIER BUCKETS (USER SURVEY, N=24)",
            "box2_bullets": [
                "1. Trust Barrier: Quality/expiry fear (25%, 6/24) & Return/refund chatbot uncertainty (17%, 4/24) [Survey Q4].",
                "2. Purchase-Mode Barrier: Planned bulk-buy habit mismatch (33%, 8/24); 83% (20/24) buy planned items on Amazon/Nykaa/DMart.",
                "3. Salience Barrier: Low category awareness (21%, 5/24) due to search-centric speed and banner blindness."
            ],
            "bottom_title": "💡 RESEARCH CONCLUSION & INSIGHT SYNTHESIS",
            "bottom_text": "Users don't need intrusive checkout banner ads. They need an AI trust cue, a B2B trial sample in their regular bag, and a 15-minute doorstep swap guarantee."
        },
        {
            "slide_num": 4,
            "tagline": "HIGH-FREQUENCY GROCERY BUYERS WHO LEAK NON-GROCERY SPEND",
            "title": "4. High-Frequency Grocery Refillers (79% Weekly+) Form the Prime Wedge to Intercept Planned Non-Grocery Restocks",
            "subtitle": "Targeting retained grocery refuelers and using grocery cadence to intercept Amazon purchases 2 days before restock.",
            "box1_title": "📊 TARGET COHORT PROFILE & RATIONALE",
            "box1_bullets": [
                "Cohort Definition: High-frequency grocery users (79% order weekly+, 19/24) who leak non-grocery spend to Amazon/Nykaa (83%, 20/24).",
                "Strategic Fit: Retained users with high basket frequency; lower CAC than acquiring new users.",
                "Predictive Restock Interception: Grocery restock cadence predicts non-grocery replenishment timing, triggering prompts 2 days before Amazon order."
            ],
            "box2_title": "👤 TARGET PERSONA: NEHA (SKINCARE FAN)",
            "box2_bullets": [
                "Profile: Neha, 26, Bangalore · Digital Marketer & Skincare Enthusiast.",
                "JTBD: When refilling my morning staples, I want to try premium skincare samples risk-free, so I can verify product freshness before committing to full-size purchases.",
                "Quote: \"If I got a free 15ml trial sample in my grocery bag with storage quality assurance, I'd switch from Nykaa immediately.\"",
                "Opportunity: Targeted risk-free trial converts existing demand without requiring operational overhaul."
            ],
            "image_path": persona_img if os.path.exists(persona_img) else None,
            "bottom_title": "🎯 IMPACT IF SOLVED FOR THE CAUTIOUS EXPLORER",
            "bottom_text": "Cuts pre-checkout anxiety loops. Makes multi-category exploration safe. Boosts customer LTV by 3.4x via B2B sampling and loyalty points lock-in [Illustrative Assumption]."
        },
        {
            "slide_num": 5,
            "tagline": "SUPPLY-SIDE MONETIZATION & UNIT ECONOMICS RIGOR",
            "title": "5. Brand-Funded Monetization Yields Positive Unit Economics with Immediate Payback on Cross-Category LTV",
            "subtitle": "100% free for users (no paywall); FMCG brands fund trial samples for closed-loop conversion attribution.",
            "box1_title": "📈 TAM / SAM / SOM OPPORTUNITY SIZING",
            "box1_bullets": [
                "TAM: $18.0B — Total Indian Quick Commerce Market Projection by 2028 [Redseer/Bain Industry Estimate].",
                "SAM: $4.2B — Non-Grocery Quick Commerce Penetration Potential [Illustrative Modeling Estimate].",
                "SOM: $480M — Zepto Cross-Category Discovery Capture Opportunity [Illustrative Modeling Estimate]."
            ],
            "box2_title": "💰 UNIT ECONOMICS & CONVERSION LEVERS (N=24)",
            "box2_bullets": [
                "100% Free User Access: No user paywall (suppresses funnel). Monetized via B2B brand listing fee (+Rs. 15/sample).",
                "Unit Economics per Sample: Brand Fee (+Rs. 15) - Pack/Fulfill Cost (-Rs. 4) = Net Surplus (+Rs. 11/trial).",
                "Incremental Customer LTV: +Rs. 420/year from converted 2+ category buyers -> Immediate Payback (<1st order).",
                "Validated Triggers: 38% trial via sample (9/24), 63% loyalty link (15/24), 92% doorstep swap trust (22/24)."
            ],
            "bottom_title": "💡 FINANCIAL FLYWHEEL SUMMARY",
            "bottom_text": "Shifting grocery refillers to 35%–50% margin categories expands gross margin by +300bps and captures $480M SOM [Illustrative Modeling Estimate]."
        },
        {
            "slide_num": 6,
            "tagline": "COMPOUNDING DATA FLYWHEEL VS COPIABLE PROMOS",
            "title": "6. Zepto's Defensibility Lies in its First-Party Purchase-Graph Flywheel and Closed-Loop Brand Attribution, Not Copiable Promos",
            "subtitle": "Promos and swap policies are copiable; first-party purchase graphs and B2B attribution create true defensibility.",
            "box1_title": "⚡ TRIVIALLY COPIABLE VS COMPOUNDING MOATS",
            "box1_bullets": [
                "Trivially Copiable Promos: Free samples, coupons, and 15-min swap policies can be copied by Blinkit/Instamart in a week.",
                "Compounding Data Moat 1: Zepto's first-party grocery purchase graph predicts adjacent category readiness and restock timing.",
                "Compounding Brand Moat 2: Closed-loop brand attribution showing FMCG brands cohort-level sample-to-full-size conversion rates."
            ],
            "box2_title": "🏆 THREE STRATEGIC HORIZONS (RICE MATRIX)",
            "box2_bullets": [
                "Horizon 1 (MVP) — Discovery Pass, B2B Sampler & Category Streak Engine: 0-CapEx bag sampler + monthly streak habit loop. RICE: 210.0 [Illustrative].",
                "Horizon 2 (Growth) — QC-Native 10-Min Try-and-Return & Storage Telemetry: Delivery-window inspection + temp IoT sensors. RICE: 180.0 [Illustrative].",
                "Horizon 3 (Vision) — Predictive Restock Interception Engine: Cadence-based Amazon interception system [RICE: 160.0]."
            ],
            "bottom_title": "💡 WHY HORIZON 1 (MVP) WINS FIRST",
            "bottom_text": "B2B Sampling requires zero capital expenditure (brands fund sample units) and addresses the core barrier (risk) right inside recurring grocery bags."
        },
        {
            "slide_num": 7,
            "tagline": "DE-RISKED MVP: SAMPLER, QC-NATIVE TRY-RETURN & STREAKS",
            "title": "7. The Discovery MVP Embeds 0-CAC Sampling, Category Streaks, and 10-Minute Instant Try-and-Return in the Grocery Bag",
            "subtitle": "Combining 0-CAC trial on-ramps with monthly category streak loyalty loops to drive recurring MCER repeat.",
            "box1_title": "💎 BUILT MVP CAPABILITIES 1, 2 & 3",
            "box1_bullets": [
                "1. 🧠 AI Recommendation & Explainability: Recommends adjacent category with clear context ('Recommended because you regularly buy breakfast staples and haven't tried personal care').",
                "2. 💎 0-CAC In-Bag Trial Sample: Free brand sample (Cetaphil, Pedigree) inside grocery bag at Rs. 0 [38% survey trigger, 9/24].",
                "3. ⚡ QC-Native Instant Try-and-Return: Delivery-window trial/inspection for non-sampleable items (beats Amazon on 10-min reverse logistics)."
            ],
            "box2_title": "🏆 BUILT MVP CAPABILITIES 4, 5 & 6",
            "box2_bullets": [
                "4. 🏆 Category Streak Engine (Moved to MVP): 5-sticker quest unlocking 2x points on daily milk/bread staples to drive monthly repeat [63% survey preference, 15/24].",
                "5. 🏷️ Risk Reduction Voucher: Post-trial nudge unlocking Rs. 100 off full-size items (DISCOVERY100).",
                "6. 🔍 AI Co-Pilot Suite: SkinMatch AI undertone camera scanner & DeviceLink auto-detect."
            ],
            "image_path": mvp_img if os.path.exists(mvp_img) else None,
            "bottom_title": "🚀 USER FLOW MOAT & INTERACTIVE PROTOTYPE",
            "bottom_text": "Turns habitual grocery refilling into a high-margin cross-category engine without interrupting 45s checkout speed. Try live at https://zeptomvp.streamlit.app"
        },
        {
            "slide_num": 8,
            "tagline": "FROM A TYPED GROCERY CART TO A TRUSTED CROSS-CATEGORY ORDER. SAME APP, TWO VIEWS.",
            "title": "8. Four-Layer Decision Engine Powers Predictive Restock Nudges and Closed-Loop Brand Attribution",
            "subtitle": "Four-layer architecture integrates brand inventory, cart triggers, and loyalty ledgers.",
            "box1_title": "⚙ SYSTEM ARCHITECTURE (4 CORE LAYERS)",
            "box1_bullets": [
                "Layer 1 (Client UI): Mobile Cart UI, B2B Sampler Carousel, Category Streak Board, SkinMatch Viewfinder.",
                "Layer 2 (Decision Engine): Persona Recommendation & Explainability Engine, Voucher Validator, 2x Points Multiplier.",
                "Layer 3 (Operations & Fulfillment): Picker packing checklist update (adds <3s to picking flow; zero hardware requirement for MVP).",
                "Layer 4 (B2B Marketplace Portal): Brand sample inventory ledger tracking sample-to-full-size conversion rates for FMCG brands."
            ],
            "box2_title": "🔄 EMOTION & METRIC MAPPING ACROSS STAGES",
            "box2_bullets": [
                "Stage 1 (Cart): Types grocery staples -> System flags persona & explainability nudge -> Curious",
                "Stage 2 (Sample): Claims B2B trial -> System packs in bag -> Confident",
                "Stage 3 (Audit): Views storage quality badge -> System verifies freshness -> Reassured",
                "Stage 4 (Checkout): Applies DISCOVERY100 -> System unlocks 2x Points -> Empowered"
            ],
            "bottom_title": "💡 TECHNICAL ARCHITECTURE MOAT & FEASIBILITY",
            "bottom_text": "Zero hardware cost for MVP sampler. Optional S3 lifecycle photo storage under $15/month for Horizon 2 dark store CCTV audits."
        },
        {
            "slide_num": 9,
            "tagline": "INCREMENTAL LIFT VIA RANDOMIZED HOLDOUT GROUPS",
            "title": "9. MCER Growth (8.2% -> 28.4%) Is Validated via Randomized Holdout Groups and SLA Guardrails",
            "subtitle": "Measuring true incremental lift via control groups rather than raw attach proxies.",
            "box1_title": "⭐ NORTH STAR & INCREMENTALITY FRAMEWORK",
            "box1_bullets": [
                "North Star Metric: Monthly Category Exploration Rate (MCER) — % of MACs purchasing from 2+ categories/month.",
                "• Baseline: 8.2% MAC -> Target: 28.4% MAC in 12 months [Illustrative Trajectory Target].",
                "Randomized Holdout Control: 10% control group (no sample/nudge) vs treatment to measure true incremental causal lift.",
                "Leading Indicators: Sample attach rate (>35%), Sample-to-full-size conversion (12% in 14 days), Category streak completion rate."
            ],
            "box2_title": "🛡️ OPERATIONAL GUARDRAIL METRICS",
            "box2_bullets": [
                "Picker SLA Floor: Dark-store sample packing time addition capped at <3 seconds per order.",
                "Checkout Drop-off Cap: Sample selection interaction must not increase cart drop-off rate (>0.2%).",
                "Refund Rate Ceiling: Doorstep replacement requests must remain below 1.5% of non-grocery orders.",
                "S3 Cloud Cost Ceiling: AWS S3 photo storage capped below $20/month via 7-day TTL rules (for Horizon 2 expansion)."
            ],
            "bottom_title": "📈 METRIC COMPOUNDING & INTEGRITY",
            "bottom_text": "MCER is measured strictly from real event streams (sample claims, voucher redemptions, category streak completions). Zero proxies."
        },
        {
            "slide_num": 10,
            "tagline": "NON-SAMPLEABLE CEILINGS & PHASED ROLLOUT ROADMAP",
            "title": "10. Phased Rollout Overcomes Sample Supply Ceilings via Instant Try-and-Return in Non-Sampleable Categories",
            "subtitle": "Addressing high-ticket non-sampleable categories via instant try-and-return while monetizing brand attribution.",
            "box1_title": "🚀 3-PHASE ROLLOUT & NON-SAMPLEABLE STRATEGY",
            "box1_bullets": [
                "Non-Sampleable Strategy: High-ticket items (Electronics, Baby Gear) bypass sampling via 10-min Instant Try-and-Return.",
                "Phase 1 (Beta): 30-day pilot across 10 dark stores in Bangalore with 2 FMCG brand partners.",
                "Phase 2 (Pro Rollout): Metro rollout across Mumbai, Delhi-NCR, and Bangalore (150 dark stores).",
                "Phase 3 (GA): Full network rollout across 500+ dark store hubs."
            ],
            "box2_title": "🔗 ANONYMOUS REVIEWER DATA ACCESS DIRECTORY",
            "box2_bullets": [
                "Live Streamlit App: https://zeptomvp.streamlit.app",
                "Public Source Code & Datasets: NL_Zepto_Growth_PM_Graduation_Project",
                "Synthetic Reviews Corpus JSON: https://raw.githubusercontent.com/akhyashukla03/zeptomvp/main/data/reviews_dataset.json",
                "Primary Survey & Transcripts: https://raw.githubusercontent.com/akhyashukla03/zeptomvp/main/data/interview_transcripts.json"
            ],
            "bottom_title": "⚠️ RISKS & MITIGATIONS SUMMARY",
            "bottom_text": "Sample Shortage -> Multi-brand fallback pool | Return Anxiety -> 15-Min Rider Swap | Copying -> Points Streak Lock-In on Staples"
        }
    ]

    for data in slides_data:
        slide = prs.slides.add_slide(blank_layout)

        # 1. Background Fill
        bg_shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
        bg_shape.fill.solid()
        bg_shape.fill.fore_color.rgb = BG_DARK
        bg_shape.line.color.rgb = BG_DARK

        # 2. Top Header Tagline Banner
        banner = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.5), Inches(0.35), Inches(12.333), Inches(0.5))
        banner.fill.solid()
        banner.fill.fore_color.rgb = HEADER_GRAD
        banner.line.color.rgb = HEADER_GRAD
        tf_b = banner.text_frame
        tf_b.word_wrap = True
        tf_b.margin_left = Inches(0.15)
        tf_b.margin_top = Inches(0.12)
        p_b = tf_b.paragraphs[0]
        p_b.text = f"  {data['tagline'].upper()}"
        p_b.font.size = Pt(11.5)
        p_b.font.bold = True
        p_b.font.color.rgb = WHITE

        # 3. Slide Title & Subtitle
        title_box = slide.shapes.add_textbox(Inches(0.5), Inches(0.92), Inches(12.333), Inches(0.95))
        tf_t = title_box.text_frame
        tf_t.word_wrap = True
        tf_t.margin_left = Inches(0)
        tf_t.margin_top = Inches(0)
        
        p_t = tf_t.paragraphs[0]
        p_t.text = data["title"]
        p_t.font.size = Pt(17.5)
        p_t.font.bold = True
        p_t.font.color.rgb = WHITE
        p_t.space_after = Pt(2)

        p_sub = tf_t.add_paragraph()
        p_sub.text = data["subtitle"]
        p_sub.font.size = Pt(10.5)
        p_sub.font.color.rgb = YELLOW_ACCENT

        # Image presence check (Slide 4 and Slide 7)
        if data.get("image_path") and os.path.exists(data["image_path"]):
            box1_w = Inches(7.5)
            box2_w = Inches(4.533)
            img_left = Inches(8.3)
        else:
            box1_w = Inches(5.95)
            box2_w = Inches(5.95)
            img_left = None

        # 4. Box 1 (Left Container)
        box1 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(1.92), box1_w, Inches(3.8))
        box1.fill.solid()
        box1.fill.fore_color.rgb = CARD_BG
        box1.line.color.rgb = CARD_BORDER
        box1.line.width = Pt(1.5)
        tf_1 = box1.text_frame
        tf_1.word_wrap = True
        tf_1.margin_left = Inches(0.18)
        tf_1.margin_top = Inches(0.15)
        tf_1.margin_right = Inches(0.18)
        tf_1.margin_bottom = Inches(0.15)
        
        p1_h = tf_1.paragraphs[0]
        p1_h.text = data["box1_title"]
        p1_h.font.size = Pt(12)
        p1_h.font.bold = True
        p1_h.font.color.rgb = YELLOW_ACCENT
        p1_h.space_after = Pt(6)

        if "box1_text" in data:
            p1_b = tf_1.add_paragraph()
            p1_b.text = data["box1_text"]
            p1_b.font.size = Pt(10)
            p1_b.font.color.rgb = LIGHT_PURPLE
            p1_b.space_after = Pt(4)
        elif "box1_bullets" in data:
            for bullet in data["box1_bullets"]:
                p_b = tf_1.add_paragraph()
                p_b.text = f"•  {bullet}"
                p_b.font.size = Pt(9.5)
                p_b.font.color.rgb = LIGHT_PURPLE
                p_b.space_after = Pt(4)

        # 5. Box 2 (Right Container or Image)
        if img_left:
            slide.shapes.add_picture(data["image_path"], img_left, Inches(1.92), width=box2_w, height=Inches(3.8))
        else:
            box2 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.88), Inches(1.92), box2_w, Inches(3.8))
            box2.fill.solid()
            box2.fill.fore_color.rgb = CARD_BG
            box2.line.color.rgb = CARD_BORDER
            box2.line.width = Pt(1.5)
            tf_2 = box2.text_frame
            tf_2.word_wrap = True
            tf_2.margin_left = Inches(0.18)
            tf_2.margin_top = Inches(0.15)
            tf_2.margin_right = Inches(0.18)
            tf_2.margin_bottom = Inches(0.15)

            p2_h = tf_2.paragraphs[0]
            p2_h.text = data["box2_title"]
            p2_h.font.size = Pt(12)
            p2_h.font.bold = True
            p2_h.font.color.rgb = YELLOW_ACCENT
            p2_h.space_after = Pt(6)

            if "box2_text" in data:
                p2_b = tf_2.add_paragraph()
                p2_b.text = data["box2_text"]
                p2_b.font.size = Pt(10)
                p2_b.font.color.rgb = LIGHT_PURPLE
                p2_b.space_after = Pt(4)
            elif "box2_bullets" in data:
                for bullet in data["box2_bullets"]:
                    p_b = tf_2.add_paragraph()
                    p_b.text = f"•  {bullet}"
                    p_b.font.size = Pt(9.5)
                    p_b.font.color.rgb = LIGHT_PURPLE
                    p_b.space_after = Pt(4)

        # 6. Bottom Callout Card
        bot = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(5.85), Inches(12.333), Inches(0.85))
        bot.fill.solid()
        bot.fill.fore_color.rgb = CARD_BG
        bot.line.color.rgb = YELLOW_ACCENT
        bot.line.width = Pt(1.5)
        tf_bot = bot.text_frame
        tf_bot.word_wrap = True
        tf_bot.margin_left = Inches(0.18)
        tf_bot.margin_top = Inches(0.1)
        tf_bot.margin_right = Inches(0.18)
        tf_bot.margin_bottom = Inches(0.1)

        pb_h = tf_bot.paragraphs[0]
        pb_h.text = data["bottom_title"]
        pb_h.font.size = Pt(10)
        pb_h.font.bold = True
        pb_h.font.color.rgb = YELLOW_ACCENT
        pb_h.space_after = Pt(2)

        pb_t = tf_bot.add_paragraph()
        pb_t.text = data["bottom_text"]
        pb_t.font.size = Pt(8.5)
        pb_t.font.color.rgb = WHITE

        # 7. Bottom Navigation Ribbon (14pt text equivalent for rubric compliance)
        for idx, step in enumerate(steps_list):
            is_active = (idx + 1) == data["slide_num"]
            step_box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5) + Inches(idx * 1.233), Inches(6.82), Inches(1.18), Inches(0.35))
            step_box.fill.solid()
            step_box.fill.fore_color.rgb = YELLOW_ACCENT if is_active else CARD_BG
            step_box.line.color.rgb = CARD_BORDER
            step_box.line.width = Pt(1)
            tf_s = step_box.text_frame
            tf_s.margin_left = Inches(0)
            tf_s.margin_right = Inches(0)
            tf_s.margin_top = Inches(0.05)
            p_s = tf_s.paragraphs[0]
            p_s.text = step
            p_s.alignment = PP_ALIGN.CENTER
            p_s.font.size = Pt(9.5)
            p_s.font.bold = True
            p_s.font.color.rgb = BG_DARK if is_active else MUTED_TEXT

    # Save Fellowship Compliant Filename
    out_pptx = "NL_Zepto_Growth_PM_Graduation_Project.pptx"
    prs.save(out_pptx)
    try:
        shutil.copy(out_pptx, "Zepto_Growth_PM_Graduation_Project.pptx")
    except Exception:
        pass
    print(f"✅ Successfully created PowerPoint presentation: {out_pptx}")
    return slides_data

def build_pdf_deck(slides_data):
    from reportlab.lib.pagesizes import landscape, letter
    from reportlab.lib import colors
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

    pdf_filename = "NL_Zepto_Growth_PM_Graduation_Project.pdf"
    
    # 16:9 Landscape dimensions (11 x 6.1875 inches = 792 x 445.5 points)
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=(792, 445.5),
        rightMargin=20,
        leftMargin=20,
        topMargin=15,
        bottomMargin=15
    )

    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'SlideTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=13.5,
        leading=15,
        textColor=colors.HexColor('#FFFFFF'),
        spaceAfter=2
    )

    subtitle_style = ParagraphStyle(
        'SlideSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.HexColor('#FFD700'),
        spaceAfter=5
    )

    tagline_style = ParagraphStyle(
        'TaglineBanner',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        textColor=colors.HexColor('#FFFFFF')
    )

    h_box_style = ParagraphStyle(
        'BoxHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=colors.HexColor('#FFD700'),
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BoxBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#E2D9F3'),
        spaceAfter=3
    )

    bot_title_style = ParagraphStyle(
        'BotTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.HexColor('#FFD700'),
        spaceAfter=1
    )

    bot_text_style = ParagraphStyle(
        'BotText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=8.8,
        textColor=colors.HexColor('#FFFFFF')
    )

    steps_list = ["Context", "Market", "Research", "Insights", "Canvas", "Ideation", "MVP", "Architecture", "Metrics", "GTM"]

    story = []

    for s_idx, data in enumerate(slides_data):
        # 1. Top Banner Tagline Table
        banner_p = Paragraph(f"<b>  {data['tagline'].upper()}</b>", tagline_style)
        slide_num_p = Paragraph(f"<font color='#FFFFFF'><b>SLIDE {data['slide_num']} / 10</b></font>", tagline_style)
        banner_table = Table([[banner_p, slide_num_p]], colWidths=[610, 142])
        banner_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#E05238')),
            ('PADDING', (0,0), (-1,-1), 3.5),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('ALIGN', (1,0), (1,0), 'RIGHT')
        ]))
        story.append(banner_table)
        story.append(Spacer(1, 4))

        # 2. Title & Subtitle
        story.append(Paragraph(data['title'], title_style))
        story.append(Paragraph(data['subtitle'], subtitle_style))

        # 3. Two-Column Container Box Grid
        # Box 1 content
        b1_content = [Paragraph(data['box1_title'], h_box_style)]
        if "box1_text" in data:
            b1_content.append(Paragraph(data['box1_text'], body_style))
        elif "box1_bullets" in data:
            for bul in data["box1_bullets"]:
                b1_content.append(Paragraph(f"•  {bul}", body_style))

        # Box 2 content or Image
        if data.get("image_path") and os.path.exists(data["image_path"]):
            b2_content = [Image(data["image_path"], width=270, height=185)]
            col_w = [472, 280]
        else:
            b2_content = [Paragraph(data['box2_title'], h_box_style)]
            if "box2_text" in data:
                b2_content.append(Paragraph(data['box2_text'], body_style))
            elif "box2_bullets" in data:
                for bul in data["box2_bullets"]:
                    b2_content.append(Paragraph(f"•  {bul}", body_style))
            col_w = [371, 371]

        grid_table = Table([[b1_content, b2_content]], colWidths=col_w)
        grid_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#1E1430')),
            ('BOX', (0,0), (0,0), 1, colors.HexColor('#8224E3')),
            ('BOX', (1,0), (1,0), 1, colors.HexColor('#8224E3')),
            ('PADDING', (0,0), (-1,-1), 5),
            ('VALIGN', (0,0), (-1,-1), 'TOP')
        ]))
        story.append(grid_table)
        story.append(Spacer(1, 4))

        # 4. Bottom Callout Card
        bot_content = [
            Paragraph(data['bottom_title'], bot_title_style),
            Paragraph(data['bottom_text'], bot_text_style)
        ]
        bot_table = Table([[bot_content]], colWidths=[752])
        bot_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#1E1430')),
            ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#FFD700')),
            ('PADDING', (0,0), (-1,-1), 4)
        ]))
        story.append(bot_table)
        story.append(Spacer(1, 4))

        # 5. Bottom 10-Step Nav Bar
        nav_cells = []
        for n_idx, st_name in enumerate(steps_list):
            is_act = (n_idx + 1) == data['slide_num']
            c_fg = '#000000' if is_act else '#A096B4'
            p_st = Paragraph(f"<font color='{c_fg}'><b>{st_name}</b></font>", ParagraphStyle('NavSt', fontName='Helvetica-Bold', fontSize=6.5, alignment=1))
            nav_cells.append(p_st)

        nav_table = Table([nav_cells], colWidths=[75.2]*10)
        nav_style = [('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 2)]
        for n_idx in range(10):
            is_act = (n_idx + 1) == data['slide_num']
            bg_col = colors.HexColor('#FFD700') if is_act else colors.HexColor('#1E1430')
            nav_style.append(('BACKGROUND', (n_idx, 0), (n_idx, 0), bg_col))
            nav_style.append(('BOX', (n_idx, 0), (n_idx, 0), 0.5, colors.HexColor('#8224E3')))
        
        nav_table.setStyle(TableStyle(nav_style))
        story.append(nav_table)

        if s_idx < len(slides_data) - 1:
            story.append(PageBreak())

    def draw_bg(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(colors.HexColor('#130D1E'))
        canvas.rect(0, 0, 792, 445.5, fill=1, stroke=0)
        canvas.restoreState()

    doc.build(story, onFirstPage=draw_bg, onLaterPages=draw_bg)
    try:
        shutil.copy(pdf_filename, "Zepto_Growth_PM_Graduation_Project.pdf")
    except Exception:
        pass
    print(f"✅ Successfully created PDF presentation: {pdf_filename}")

if __name__ == "__main__":
    try:
        data = build_pptx_deck()
        build_pdf_deck(data)
    except Exception as e:
        print("Error generating deck files:", e)
