import streamlit as st
import streamlit.components.v1 as components
import json
import os

# Set Streamlit Page Configuration
st.set_page_config(
    page_title="Zepto Cross-Category Discovery | Growth PM Portal",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling for Streamlit Sidebar & Header
st.markdown("""
    <style>
    .stApp {
        background-color: #130d1e;
        color: #ffffff;
    }
    .css-1d38152 {
        background-color: #1b1328;
    }
    .stButton>button {
        background: linear-gradient(135deg, #e05238, #ff5252);
        color: white;
        font-weight: bold;
        border-radius: 8px;
        border: none;
    }
    </style>
""", unsafe_allow_html=True)

# Sidebar Navigation
st.sidebar.image("https://upload.wikimedia.org/wikipedia/commons/ thumb/8/87/Zepto_Logo.png/640px-Zepto_Logo.png", width=160) if False else None
st.sidebar.title("⚡ Zepto PM Navigation")
st.sidebar.markdown("**Growth PM Graduation Project**")

page = st.sidebar.radio(
    "Select Section:",
    [
        "🚀 Full Interactive Web Portal & MVP",
        "📊 Part 1: AI PM Discovery Engine",
        "👥 Part 2: Primary User Research (N=22)",
        "📱 Part 3: Zepto AI MVP Simulator",
        "🖼️ Part 4: 10-Slide Pitch Deck (PDF/PPTX)"
    ]
)

# Download Deliverables Sidebar Section
st.sidebar.markdown("---")
st.sidebar.subheader("📥 Download Project Deliverables")

pdf_path = os.path.join(os.path.dirname(__file__), "Zepto_Growth_PM_Graduation_Project.pdf")
if os.path.exists(pdf_path):
    with open(pdf_path, "rb") as f:
        st.sidebar.download_button(
            label="📄 Download PDF Pitch Deck",
            data=f.read(),
            file_name="Zepto_Growth_PM_Graduation_Project.pdf",
            mime="application/pdf"
        )

pptx_path = os.path.join(os.path.dirname(__file__), "Zepto_Growth_PM_Graduation_Project.pptx")
if os.path.exists(pptx_path):
    with open(pptx_path, "rb") as f:
        st.sidebar.download_button(
            label="📊 Download PPTX Pitch Deck",
            data=f.read(),
            file_name="Zepto_Growth_PM_Graduation_Project.pptx",
            mime="application/vnd.openxmlformats-officedocument.presentationml.presentation"
        )

dataset_path = os.path.join(os.path.dirname(__file__), "data", "reviews_dataset.json")
if os.path.exists(dataset_path):
    with open(dataset_path, "rb") as f:
        st.sidebar.download_button(
            label="🧠 Download 2,000 Reviews Dataset",
            data=f.read(),
            file_name="reviews_dataset.json",
            mime="application/json"
        )

# Read index.html content for full embedding
html_path = os.path.join(os.path.dirname(__file__), "index.html")
html_content = ""
if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()

if page == "🚀 Full Interactive Web Portal & MVP":
    st.title("⚡ Zepto Cross-Category Discovery Portal & Interactive MVP")
    st.caption("Full production web portal featuring AI PM Engine, Survey Scorecards, Interactive iPhone Simulator, and Pitch Deck.")
    if html_content:
        components.html(html_content, height=1050, scrolling=True)
    else:
        st.error("index.html not found.")

elif page == "📊 Part 1: AI PM Discovery Engine":
    st.title("📊 Part 1: AI-Powered PM Discovery Engine")
    st.markdown("""
    **Dataset Scope**: 2,000 multi-platform social reviews across 10 channels (*Play Store, App Store, Reddit, Quora, LinkedIn, ProductHunt, Trustpilot, Twitter, MouthShut*).
    
    ### 🔑 Key Insight Summary:
    * **71.2% Grocery Lock-in**: Customers repeat daily staple orders (Milk, Eggs, Bread) in fast <45-second checkout flows.
    * **20.1% Quality & Expiry Fear**: Customers fear active skincare acids degrade in hot dark stores.
    * **19.9% Bulk Buy Mismatch**: Preference for buying diapers & pet food in bulk on DMart or Amazon.
    * **15.3% Ecological Guilt**: Friction around single-item plastic packaging waste and rider trips.
    """)
    if html_content:
        components.html(html_content, height=900, scrolling=True)

elif page == "👥 Part 2: Primary User Research (N=22)":
    st.title("👥 Part 2: Primary User Research & Cohort Validation")
    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Power-User Frequency", "82%", "1–4+ orders/week")
    col2.metric("Points Streak Preference", "68%", "Voted over cashback")
    col3.metric("Return Anxiety Blocker", "50%", "Refund chatbot loops")
    col4.metric("Doorstep Swap Trust", "91%", "3.0–5.0 rating")
    
    st.markdown("---")
    st.subheader("🗣️ 5 Metro User Transcripts (Bangalore, Mumbai, Delhi, Gurgaon)")
    if html_content:
        components.html(html_content, height=900, scrolling=True)

elif page == "📱 Part 3: Zepto AI MVP Simulator":
    st.title("📱 Part 3: Interactive Zepto AI MVP Simulator")
    st.info("💡 Try: 1. Switching customer personas, 2. Claiming a free trial sample, 3. Running SkinMatch AI, 4. Tapping 'View Storage Audit' for Model B CCTV logs!")
    if html_content:
        components.html(html_content, height=950, scrolling=True)

elif page == "🖼️ Part 4: 10-Slide Pitch Deck (PDF/PPTX)":
    st.title("🖼️ Part 4: 10-Slide Pitch Deck Deliverables")
    st.markdown("Download official submission files below or view the interactive deck in the portal:")
    
    col_a, col_b = st.columns(2)
    with col_a:
        if os.path.exists(pdf_path):
            with open(pdf_path, "rb") as f:
                st.download_button(
                    label="📄 Download Official PDF Presentation Deck",
                    data=f.read(),
                    file_name="Zepto_Growth_PM_Graduation_Project.pdf",
                    mime="application/pdf",
                    use_container_width=True
                )
    with col_b:
        if os.path.exists(pptx_path):
            with open(pptx_path, "rb") as f:
                st.download_button(
                    label="📊 Download Editable PowerPoint (.pptx) Deck",
                    data=f.read(),
                    file_name="Zepto_Growth_PM_Graduation_Project.pptx",
                    mime="application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    use_container_width=True
                )
    
    st.markdown("---")
    if html_content:
        components.html(html_content, height=900, scrolling=True)
