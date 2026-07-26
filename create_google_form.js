/**
 * Zepto Growth PM - Stealth / Masked Primary Research Google Form Generator Script
 * 
 * DESIGN GOAL:
 * Mask exact feature mechanics (Zepto Discovery Pass, B2B Sampling, Category Streak Board) 
 * so cohort peers/competitors cannot copy your IP, while gathering rigorous 
 * behavioral preference data to validate your PM prioritization.
 * 
 * INSTRUCTIONS TO RUN:
 * 1. Open https://script.google.com/ or go to Google Drive -> New -> More -> Google Apps Script.
 * 2. Delete any default code in the editor and paste THIS ENTIRE SCRIPT.
 * 3. Click the "Save" icon (Ctrl+S or Cmd+S).
 * 4. Click the "Run" button at the top toolbar.
 * 5. Grant permissions when prompted.
 * 6. Check the Execution Log at the bottom for your live Stealth Google Form URL!
 */

function createZeptoPrimaryResearchForm() {
  // Create a new Google Form
  var formTitle = "Quick-Commerce Shopping Habits & Consumer Preference Survey";
  var form = FormApp.create(formTitle);
  
  form.setDescription(
    "Hi there! We are conducting a 90-second research study on online shopping habits and delivery preferences across quick-commerce apps. " +
    "Your responses are completely anonymous and will be used solely for academic product research."
  );
  
  form.setConfirmationMessage(
    "Thank you! Your responses have been recorded."
  );

  // Automatically create a linked Google Sheet for real-time response storage
  var ss = SpreadsheetApp.create("Stealth QC Survey Responses (Spreadsheet)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  
  // ==========================================
  // SECTION 1: Baseline Usage & Category Habits
  // ==========================================
  form.addSectionHeaderItem()
      .setTitle("Section 1: Quick-Commerce Usage & Shopping Frequency")
      .setHelpText("Understanding how you currently use 10-minute delivery apps.");

  // Q1: Order Frequency
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle("1. How frequently do you use 10-minute delivery apps (Zepto, Blinkit, Instamart)?")
    .setChoiceValues([
      "Daily or alternate days (4+ orders per week)",
      "1–2 times a week (2–4 orders per month)",
      "2–3 times a month",
      "Rarely / Emergency shortages only"
    ])
    .setRequired(true);

  // Q2: Currently Bought Categories
  var q2 = form.addCheckboxItem();
  q2.setTitle("2. Which product categories do you CURRENTLY order on 10-minute apps? (Select all that apply)")
    .setChoiceValues([
      "Daily Dairy, Bakery & Eggs (Milk, Bread, Paneer)",
      "Fresh Fruits & Vegetables",
      "Snacks, Munchies & Beverages",
      "Beauty, Skincare & Personal Care",
      "Pet Food & Pet Supplies",
      "Electronics & Charging Cables",
      "Baby Care & Diapers",
      "Household Cleaning Essentials"
    ])
    .setRequired(true);

  // Q3: Primary Channel for Non-Groceries
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle("3. Where do you usually buy PLANNED non-grocery items (Skincare, Pet kibble, Diapers, Cleaning bulk)?")
    .setChoiceValues([
      "Specialized E-Commerce Apps (Nykaa, FirstCry, Supertails)",
      "General E-Commerce Platforms (Amazon, Flipkart)",
      "Physical Supermarkets (DMart, Reliance Fresh, Local Stores)",
      "10-Minute Quick-Commerce Apps"
    ])
    .setRequired(true);

  // ==========================================
  // SECTION 2: Friction Points (Masked Objections)
  // ==========================================
  form.addPageBreakItem().setTitle("Section 2: Non-Grocery Purchase Frictions");

  // Q4: Objections to Buying Non-Groceries on Quick Commerce
  var q4 = form.addCheckboxItem();
  q4.setTitle("4. What stops you from buying non-grocery items (Beauty, Pets, Electronics) on 10-minute apps? (Select top 3)")
    .setChoiceValues([
      "Buying behavior mismatch (I plan and buy monthly bulk from DMart/Amazon for lower prices)",
      "Quality & expiry concerns (Uncertainty about dark store warehouse storage conditions)",
      "Packaging & delivery guilt (Ordering single small items in dedicated delivery trips feels wasteful)",
      "App interface overload (Checkout screen has too many pop-ups/fees, so I checkout in a hurry)",
      "Category awareness (I don't think of quick-commerce apps when I need non-grocery items)",
      "Return/Refund uncertainty (Worry about hassle if an item is damaged or shade is wrong)"
    ])
    .setRequired(true);

  // ==========================================
  // SECTION 3: Masked Solution Preference & Trade-Offs (IP-PROTECTED)
  // ==========================================
  form.addPageBreakItem().setTitle("Section 3: Delivery Incentives & Trial Preferences");

  // Q5: Masking B2B Sampling (Trial Risk Reduction)
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle("5. Trial Incentive: What would MOST encourage you to try a new skincare, pet, or household brand on a 10-minute app?")
    .setChoiceValues([
      "Receiving a FREE mini trial sample included inside your regular grocery delivery bag",
      "A 20% discount coupon on the full-sized item",
      "Reading verified customer reviews and rating badges",
      "Free 10-minute delivery guarantee"
    ])
    .setRequired(true);

  // Q6: Masking Category Streak Board (Cross-Subsidy Incentive)
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle("6. Loyalty Structure: Which loyalty reward structure would motivate you to shop MORE across different categories?")
    .setChoiceValues([
      "Earning bigger discounts on daily essentials (Milk/Bread) by trying different categories each month",
      "A flat 1% cashback on total monthly spend",
      "Free delivery coupons on orders above Rs. 199",
      "Exclusive access to flash sales"
    ])
    .setRequired(true);

  // Q7: Masking Trust Shield (Replacement Assurance)
  var q7 = form.addScaleItem();
  q7.setTitle("7. Guarantee Assurance: If a 10-minute app guaranteed an instant 15-minute rider doorstep replacement or shade-match refund for non-returnable items (Cosmetics, Gadgets), how much would this increase your willingness to buy?")
    .setBounds(1, 5)
    .setLabels("1 - No Impact", "5 - Massive Increase")
    .setRequired(true);

  // Q8: Masking Voucher (Category Exploration Motivation)
  var q8 = form.addMultipleChoiceItem();
  q8.setTitle("8. Discovery Discount: What type of discount is most likely to make you try a category you have NEVER bought on the app before?")
    .setChoiceValues([
      "A flat Rs. 100 off voucher restricted to first-time category trials",
      "A 10% discount across the entire shopping cart",
      "Buy 1 Get 1 Free on select items",
      "Zero handling fee on your next 3 orders"
    ])
    .setRequired(true);

  // Q9: Masking Membership Upgrade Preference
  var q9 = form.addMultipleChoiceItem();
  q9.setTitle("9. Membership Perks: If your delivery app offered a monthly membership tier, which perk would you value MOST?")
    .setChoiceValues([
      "1 Free curated brand product sample delivered in your grocery bag every month",
      "Unlimited free delivery on orders above Rs. 99",
      "Priority rider assignment during peak rain/rush hours",
      "Double reward points on daily grocery purchases"
    ])
    .setRequired(true);

  // Q10: Trade-off Ranking Matrix
  var q10 = form.addGridItem();
  q10.setTitle("10. Incentive Ranking: Please RANK the following 4 incentives in order of value to YOU:")
    .setRows([
      "Free brand sample included in grocery bag",
      "Category exploration unlocking cheaper daily groceries",
      "15-Minute doorstep item replacement guarantee",
      "Rs. 100 voucher for trying new product categories"
    ])
    .setColumns([
      "Rank 1 (Most Valuable)",
      "Rank 2 (High Value)",
      "Rank 3 (Moderate Value)",
      "Rank 4 (Least Valuable)"
    ])
    .setRequired(true);

  // Log Form Details
  Logger.log("=================================================");
  Logger.log("SUCCESS! Stealth Primary Research Form Created!");
  Logger.log("Form Title: " + form.getTitle());
  Logger.log("Form Edit URL (View & Manage): " + form.getEditUrl());
  Logger.log("Form Published URL (Share in WhatsApp/Cohort): " + form.getPublishedUrl());
  Logger.log("Linked Google Sheet URL (Response Data): " + ss.getUrl());
  Logger.log("=================================================");
}
