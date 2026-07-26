import os
import sys

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

    # Clean Modern Color Palette
    BG_DARK = RGBColor(19, 13, 30)          # #130d1e Deep Aubergine
    CARD_BG = RGBColor(30, 20, 48)          # #1e1430 Card container
    CARD_BORDER = RGBColor(130, 36, 227)    # #8224e3 Purple
    HEADER_GRAD = RGBColor(224, 82, 56)     # #e05238 Coral Orange
    YELLOW_ACCENT = RGBColor(255, 215, 0)   # #ffd700 Gold
    WHITE = RGBColor(255, 255, 255)
    LIGHT_PURPLE = RGBColor(226, 217, 243)
    MUTED_TEXT = RGBColor(170, 160, 190)
    GREEN_ACCENT = RGBColor(34, 197, 94)

    steps_list = ["Context", "Agent's Market", "Research", "Insights", "Problem Canvas", "Ideation", "MVP", "Journey", "Metrics", "Risks + GTM"]

    # Image paths
    img_dir = os.path.join(os.path.dirname(__file__), 'images')
    persona_img = os.path.join(img_dir, 'persona_neha_1784810986952.png')
    mvp_img = os.path.join(img_dir, 'tab3_initial_view_1784810708426.png')

    slides_data = [
        {
            "slide_num": 1,
            "tagline": "QUICK COMMERCE GOT FASTER. CATEGORY CHOICE GOT HARDER.",
            "title": "1. Context & Brief: Solving Category Tunnel Vision in Quick Commerce",
            "subtitle": "Why 71.2% of habitual grocery buyers checkout in <45s without exploring high-margin non-grocery categories",
            "box1_title": "📋 THE STRATEGIC BRIEF",
            "box1_bullets": [
                "Role & Scope: PM on Zepto Growth Team driving non-grocery cross-category trial.",
                "Problem Core: 71.2% of active users strictly repeat daily grocery orders (Milk, Eggs, Bread).",
                "Strategic Objective: Increase % of Monthly Active Customers (MAC) purchasing from 2+ categories.",
                "Target Categories: Personal Care, Pet Care, WFH Gadgets, Household Utilities, Baby Care."
            ],
            "box2_title": "⚡ ZEPTO SCALE VS MARGIN COLLAPSE",
            "box2_bullets": [
                "Scale Milestone: $1.2B ARR across 500+ Dark Store hubs in Tier-1 Metro markets.",
                "Grocery Tunnel Vision: 71.2% order concentration in low-margin staples (~10% gross margin).",
                "Category Drop-off Cliff: Non-grocery trial drops to <8.2% of MAC.",
                "Margin Expansion Moat: Personal care & pet supplies yield 35%–50% gross margins."
            ],
            "bottom_title": "⚠️ THE PARADOX: ROUTINE ORDERS = HIGH SPEED, ZERO EXPLORATION",
            "bottom_text": "Users checkout in <45 seconds before looking at ad banners. Banner ads fail because users suffer from Impulse & Dark-Pattern Fatigue. Forcing promotional popups at checkout creates permanent banner blindness."
        },
        {
            "slide_num": 2,
            "tagline": "$500M SPENT ON CHECKOUT AD BANNERS. $0 SPENT ON RISK-FREE TRIAL.",
            "title": "2. Market & Blind Spot: Where Capital Was Spent vs Where Users Get Stuck",
            "subtitle": "Why quick-commerce ecosystems optimized 10-minute speed but left category discovery unsolved",
            "box1_title": "⭐ WHAT THE ECOSYSTEM HAS SOLVED",
            "box1_bullets": [
                "✅ 10-Minute Hyper-Local Delivery Speed (Zepto, Blinkit, Instamart)",
                "✅ Dark Store Density & Real-Time Inventory (500+ Dark Stores)",
                "✅ High-Speed Search & Cart Auto-Complete (Sub-second UI response)"
            ],
            "box2_title": "❌ WHAT NOBODY HAS SOLVED (THE BLIND SPOT)",
            "box2_bullets": [
                "❌ Dark Store Expiry & Hygiene Trust: 20.1% friction (fears heat degrades products)",
                "❌ Bulk Buying Price Mismatch: 19.9% friction (DMart/Amazon bulk buy preference)",
                "❌ Risk-Free Product Sampling: 0-CAC sampling moat completely unaddressed",
                "❌ Return & Refund Bot Uncertainty: 50% survey friction (reluctance to buy high-value items)"
            ],
            "bottom_title": "★ CORE THESIS TESTED & VALIDATED",
            "bottom_text": "Users abandon non-grocery discovery not because they lack desire, but because the financial and quality cost of a wrong/expired non-grocery buy is invisible until delivered."
        },
        {
            "slide_num": 3,
            "tagline": "THE PROBLEM ISN'T BANNER VISIBILITY. IT'S FINANCIAL & QUALITY RISK BEFORE CHECKOUT.",
            "title": "3. AI Discovery Engine: 2,000 Social Reviews & N=22 Survey Data",
            "subtitle": "Synthesizing 10 multi-platform channels (Play Store, App Store, Reddit, Quora, LinkedIn, ProductHunt, Trustpilot, Twitter, MouthShut)",
            "box1_title": "📊 2,000 SCRAPED REVIEWS BREAKDOWN",
            "box1_bullets": [
                "Dataset Split: 33.3% Category Discovery Barriers vs 66.7% Operational Noise.",
                "Quality & Expiry Fear (20.1%): Fear active ingredients degrade in hot dark stores.",
                "Planned Buy Mismatch (19.9%): Preference for buying diapers & pet food in bulk on DMart.",
                "Ecological Packaging Guilt (15.3%): Friction around single-item plastic packaging waste.",
                "Checkout Dark Pattern Fatigue (15.9%): Annoyance with rain fees & tip popups."
            ],
            "box2_title": "🎯 N=22 LIVE AUDIENCE SURVEY SCORECARD",
            "box2_bullets": [
                "82% Power-User Frequency: Order 1–4+ times/week on quick-commerce apps.",
                "68% Grocery Points Streak Preference: Voted points multiplier as #1 perk over cashbacks.",
                "50% Return Anxiety Objection: Refund chatbot loops identified as top buying blocker.",
                "91% Doorstep Swap Trust: Rated 15-Min Doorstep Replacement at 3.0–5.0 trust boost.",
                "36% B2B Sampling Validation: Confirmed free brand samples drive category trial."
            ],
            "bottom_title": "💡 RESEARCH CONCLUSION & INSIGHT SYNTHESIS",
            "bottom_text": "Users don't need intrusive checkout banner ads. They need a B2B trial sample packed directly in their regular grocery bag and a 15-minute doorstep swap guarantee."
        },
        {
            "slide_num": 4,
            "tagline": "THEY USE ZEPTO EVERY MORNING. THEY JUST CAN'T TRUST NON-GROCERY ITEMS AT CHECKOUT.",
            "title": "4. Behavioral Segmentation & Persona Deep-Dive (Figma UI Design)",
            "subtitle": "Targeting the Cautious Explorer & Perfectionist Prompter cohorts with Figma UI Mockups",
            "box1_title": "📊 BEHAVIORAL SEGMENTATION (2x2 MATRIX)",
            "box1_bullets": [
                "Habitual Refiller (71%): Buys milk/bread daily, ignores all promotional banners.",
                "Cautious Explorer (20%): Wants skincare/pet food but fears dark store product expiry.",
                "Impulse Avoider (6%): Hates checkout dark patterns, delivery fees, and rain charges.",
                "Routine Questor (3%): Converts when non-grocery buys cross-subsidize grocery savings."
            ],
            "box2_title": "👤 TARGET PERSONA: NEHA (SKINCARE FAN)",
            "box2_bullets": [
                "Profile: Neha, 26, Bangalore · Digital Marketer & Skincare Enthusiast.",
                "JTBD: When buying skincare, I want proof of dark-store storage temperature & batch freshness, so that I don't ruin my skin barrier.",
                "Quote: \"If I saw a live dark-store storage audit and got a free 15ml trial sample in my grocery bag, I'd switch from Nykaa immediately.\""
            ],
            "image_path": persona_img if os.path.exists(persona_img) else None,
            "bottom_title": "🎯 IMPACT IF SOLVED FOR THE CAUTIOUS EXPLORER",
            "bottom_text": "Cuts pre-checkout anxiety loops. Makes multi-category exploration safe. Boosts customer LTV by 3.4x via B2B sampling and loyalty points lock-in."
        },
        {
            "slide_num": 5,
            "tagline": "GROCERIES BUILD DAILY RETENTION. NON-GROCERIES BUILD PROFIT MARGINS.",
            "title": "5. Problem Canvas & Opportunity Sizing ($480M SOM)",
            "subtitle": "Shifting low-margin grocery orders (~10% margin) to 35%–50% gross margin categories",
            "box1_title": "📈 TAM / SAM / SOM OPPORTUNITY SIZING",
            "box1_bullets": [
                "TAM: $18.0B — Total Indian Quick Commerce Market Projection by 2028.",
                "SAM: $4.2B — Non-Grocery Quick Commerce Penetration Potential.",
                "SOM: $480M — Zepto Cross-Category Discovery Capture Opportunity."
            ],
            "box2_title": "🎯 EXPECTED SOLUTION IMPACT METRICS",
            "box2_bullets": [
                "B2B Free Sampling: 0% trial → 36% trial rate (+4.5x Category Trial Rate).",
                "Routine Quest Streaks: 10% margin → 2x Points on Staples (+68% Retention Rate).",
                "15-Min Rider Swap: 71% return fear → 91% trust score (-50% Return Anxiety)."
            ],
            "bottom_title": "💡 FINANCIAL FLYWHEEL SUMMARY",
            "bottom_text": "15M active users → 12.3M stuck in grocery tunnel vision. Only 8.2% reach non-groceries. Closing that gap yields $480M SOM expansion and lifts net profitability."
        },
        {
            "slide_num": 6,
            "tagline": "THREE HORIZONS OF DISCOVERY - SAMPLE, SWAP, LOCK-IN.",
            "title": "6. Ideation & RICE Prioritization Matrix",
            "subtitle": "Starting with the B2B Sampling Flywheel, expanding to reverse logistics rider swaps",
            "box1_title": "🏆 THREE STRATEGIC HORIZONS",
            "box1_bullets": [
                "Horizon 1 (MVP): ZEPTO DISCOVERY PASS & B2B SAMPLING (RICE Score: 210.0)",
                "Horizon 2 (Growth): 15-MIN DOORSTEP RIDER SWAP & SHADE MATCH (RICE Score: 180.0)",
                "Horizon 3 (Vision): ZEPTO ROUTINE QUESTS & CATEGORY STREAKS (RICE Score: 160.0)"
            ],
            "box2_title": "📋 HORIZON 1 RICE METRICS BREAKDOWN",
            "box2_bullets": [
                "Reach: 9/10 — Touches every active grocery shopping cart on Zepto.",
                "Impact: 10/10 — Solves dark-store quality fear, price match, and trial risk.",
                "Confidence: 9/10 — Validated by N=22 cohort survey & 2,000 scraped reviews.",
                "Effort: 4/10 — Zero CapEx (B2B brand partners fund sample units)."
            ],
            "bottom_title": "💡 WHY HORIZON 1 (MVP) WINS FIRST",
            "bottom_text": "B2B Sampling requires zero capital expenditure (brands fund sample units) and leverages active grocery delivery bags for 0-CAC cross-category trial."
        },
        {
            "slide_num": 7,
            "tagline": "THE SOLUTION: DISCOVERY PASS, THE TRIAL LAYER FOR ZEPTO.",
            "title": "7. MVP Product Solution: 4-Step Discovery Loop Prototype",
            "subtitle": "Converting habitual grocery refillers into multi-category buyers with Figma UI Mockups",
            "box1_title": "1. MIRROR / SAMPLE & 2. AUDIT / PREVIEW",
            "box1_bullets": [
                "1. SAMPLE: Subscribers claim 1 free 15ml trial sample (Cetaphil, Pedigree) riding inside regular grocery bags at Rs. 0.",
                "2. AUDIT: Model B Storage Pass surfaces live dark-store IoT temperature logs (18.2°C) & automated CCTV rack snapshots."
            ],
            "box2_title": "3. CONVERT / RUN & 4. LOCK-IN / LEARN",
            "box2_bullets": [
                "3. CONVERT: Post-trial nudge unlocks Rs. 100 Discovery Voucher restricted to full-size products in new categories.",
                "4. LOCK-IN: 5-Category Streak Board (🥛 Pantry, 🍿 Snacks, 💄 Beauty, 🐾 Pets, 🔌 Utility) unlocks 2x Grocery Points."
            ],
            "image_path": mvp_img if os.path.exists(mvp_img) else None,
            "bottom_title": "🚀 USER FLOW MOAT",
            "bottom_text": "Turns habitual grocery refilling into a high-margin cross-category engine without interrupting the 45-second checkout speed."
        },
        {
            "slide_num": 8,
            "tagline": "FROM A TYPED GROCERY CART TO A TRUSTED CROSS-CATEGORY ORDER. SAME APP, TWO VIEWS.",
            "title": "8. Technical Architecture & End-to-End System Flow",
            "subtitle": "Behind-the-scenes logic powering sampling allocation, IoT telemetry, and loyalty points",
            "box1_title": "⚙ SYSTEM ARCHITECTURE (4 CORE LAYERS)",
            "box1_bullets": [
                "Layer 1 (Client UI): Mobile Cart UI, B2B Sampler Carousel, Streak Board, SkinMatch Viewfinder.",
                "Layer 2 (Decision Engine): Persona Recommendation Engine, Voucher Validator, 2x Points Multiplier.",
                "Layer 3 (Operations & IoT): Dark Store Temp Log API, CCTV Rack Snapshot Pipeline (AWS S3 7-day TTL).",
                "Layer 4 (B2B Marketplace): Brand Sample Inventory Ledger (Cetaphil, Pedigree listing portal)."
            ],
            "box2_title": "🔄 EMOTION & METRIC MAPPING ACROSS STAGES",
            "box2_bullets": [
                "Stage 1 (Cart): Types grocery staples → System flags persona → Curious",
                "Stage 2 (Sample): Claims B2B trial → System packs in bag → Confident",
                "Stage 3 (Audit): Opens Model B CCTV → System shows 18.2°C temp → Reassured",
                "Stage 4 (Checkout): Applies DISCOVERY100 → System unlocks 2x Points → Empowered"
            ],
            "bottom_title": "💡 TECHNICAL ARCHITECTURE MOAT & FEASIBILITY",
            "bottom_text": "AWS S3 lifecycle auto-deletion keeps photo storage under $15/month for all of India while dark-store picking speed stays under 60 seconds."
        },
        {
            "slide_num": 9,
            "tagline": "EVERY METRIC IS TIED TO THE NORTH STAR: MONTHLY CATEGORY EXPLORATION RATE (MCER).",
            "title": "9. Success Metrics & 12-Month Trajectory (MCER: 8.2% → 28.4%)",
            "subtitle": "Targeting 3.5x expansion in cross-category monthly active customers",
            "box1_title": "⭐ NORTH STAR METRIC (MCER)",
            "box1_bullets": [
                "Monthly Category Exploration Rate (MCER): % of MACs purchasing from 2+ categories/month.",
                "Baseline: 8.2% → Month 3 (Pilot): 14.5% → Month 6 (Metro): 21.0% → Month 12 Target: 28.4%"
            ],
            "box2_title": "🛡️ OPERATIONAL GUARDRAIL METRICS",
            "box2_bullets": [
                "Picker SLA Floor: Dark-store picking speed must stay below 60s (CCTV adds 0s delay).",
                "S3 Cloud Cost Ceiling: AWS S3 photo storage capped below $20/month via 7-day TTL rules.",
                "Checkout Drop-off Cap: Sample selection interaction must not increase cart drop-off (>0.2%)."
            ],
            "bottom_title": "📈 METRIC COMPOUNDING & INTEGRITY",
            "bottom_text": "MCER is measured strictly from real event streams (sample claims, voucher redemptions, category streak completions). Zero proxies."
        },
        {
            "slide_num": 10,
            "tagline": "DISCOVERY PASS TURNS HESITATION INTO REPEATED, TRUSTED RUNS AND SCALES NEXT-TIER ARR.",
            "title": "10. Monetization, Phased Rollout & Risk Mitigation",
            "subtitle": "Financial flywheel, 3-phase launch, and 4 core risk mitigations",
            "box1_title": "🚀 3-PHASE ROLLOUT ROADMAP",
            "box1_bullets": [
                "Phase 1 (Beta): 10% Bangalore Cohort (30 days) with Cetaphil & Pedigree.",
                "Phase 2 (Pro Rollout): All Tier-1 Metros (Mumbai, Delhi, Bangalore, Hyderabad).",
                "Phase 3 (GA): Pan-India rollout across 500+ Dark Store hubs."
            ],
            "box2_title": "⚠️ RISKS & MITIGATIONS",
            "box2_bullets": [
                "HIGH - Dark Store Expiry Fears → Mitigation: Model B Automated CCTV Snapshots & IoT Temp Logs ($15/mo).",
                "HIGH - Return Bot Anxiety → Mitigation: 15-Minute Doorstep Rider Swap & Shade Match Shield.",
                "MEDIUM - Brand Supply Shortage → Mitigation: Multi-brand fallback sampling pools.",
                "MEDIUM - Competitor Copying → Mitigation: Category Streak Grocery Point Lock-In."
            ],
            "bottom_title": "💰 MONETIZATION & B2B AD ENGINE",
            "bottom_text": "Zepto Discovery Pass @ Rs. 59/mo + B2B Brand Listing Fees (Brands pay Rs. 15 per distributed trial sample)."
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
        p_t.font.size = Pt(18)
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

        # 7. Bottom 10-Step Navigation Bar
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
            p_s.font.size = Pt(8)
            p_s.font.bold = True
            p_s.font.color.rgb = BG_DARK if is_active else MUTED_TEXT

    out_pptx = "Zepto_Growth_PM_Graduation_Project.pptx"
    prs.save(out_pptx)
    print(f"✅ Successfully created PowerPoint presentation: {out_pptx}")
    return slides_data

def build_pdf_deck(slides_data):
    from reportlab.lib.pagesizes import landscape, letter
    from reportlab.lib import colors
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

    pdf_filename = "Zepto_Growth_PM_Graduation_Project.pdf"
    
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

    steps_list = ["Context", "Agent's Market", "Research", "Insights", "Problem Canvas", "Ideation", "MVP", "Journey", "Metrics", "Risks + GTM"]

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
    print(f"✅ Successfully created PDF presentation: {pdf_filename}")

if __name__ == "__main__":
    try:
        data = build_pptx_deck()
        build_pdf_deck(data)
    except Exception as e:
        print("Error generating deck files:", e)
