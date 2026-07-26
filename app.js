// Data fallback declarations in case of local CORS file:// protocol blockages
function generateFallbackReviews() {
  const intros = [
    "I order milk, bread, and curd every single morning on Zepto.",
    "Zepto is my default app for daily fresh vegetables like onions and tomatoes.",
    "I use the search bar to buy soft drinks and chips for midnight snacking.",
    "I rely on Zepto for daily essentials and grocery items when cooking.",
    "I order fruits and eggs from Zepto almost 3 times a week.",
    "Zepto delivers my tea bags, coffee, and biscuits in under 10 minutes."
  ];
  
  const barriers_templates = {
    "Trust in Quality": [
      ["But I am terrified of buying skincare products like face serums. Quick commerce warehouses feel like dumping grounds for near-expiry retail stock.", "Beauty & Grooming", "Negative"],
      ["However, ordering organic pet treats feels unsafe. I worry dark stores don't separate chemical cleaners from pet nutrition.", "Pet Supplies", "Negative"],
      ["But I'm hesitant to buy baby formula here. The products look dusty, and warehouses are rumored to have hygiene problems.", "Baby Care", "Negative"],
      ["However, gadgets like trimmers or chargers look dented, like they were returned items recycled into inventory.", "Electronics", "Negative"],
      ["But I wouldn't buy face washes. High heat in unventilated dark stores can degrade the chemicals and break down actives.", "Beauty & Grooming", "Negative"],
      ["However, the pet food bag looked chewed-damaged, probably by rodents in their dark store warehouse.", "Pet Supplies", "Negative"]
    ],
    "Lack of Awareness": [
      ["But I had no idea they started selling cat food and pet supplies. I never browse because of severe banner blindness.", "Pet Supplies", "Neutral"],
      ["However, I only realized they have premium lipsticks when a friend mentioned it. They only advertise groceries.", "Beauty & Grooming", "Neutral"],
      ["But I didn't know they sell charging cables and extension cords. It's hidden deep under utility submenus.", "Electronics", "Neutral"],
      ["However, it was a surprise to see baby wipes on the app. Their homepage is too cluttered to notice new sections.", "Baby Care", "Neutral"],
      ["But I never saw the household hardware section because I only use the search bar for groceries and eggs.", "Household Essentials", "Neutral"],
      ["However, they need to promote these categories. I assumed Zepto was only for immediate cooking ingredients.", "Pet Supplies", "Neutral"]
    ],
    "Planned vs. Emergency Mismatch": [
      ["But laundry detergent and garbage bags are planned bulk buys. I buy them monthly from DMart to get bulk pricing.", "Household Essentials", "Negative"],
      ["However, skincare and cosmetics are planned routines. I don't need them in 10 minutes and would rather wait for Nykaa sales.", "Beauty & Grooming", "Negative"],
      ["But diapers are planned monthly essentials. Quick commerce only stocks expensive, small emergency packs.", "Baby Care", "Negative"],
      ["However, charging cables are planned accessories. I only buy trusted brands like Apple or Belkin on Amazon.", "Electronics", "Negative"],
      ["But I won't buy pet kibble here. Pet care is a planned routine, and quick commerce variety is too limited for bulk buyers.", "Pet Supplies", "Negative"],
      ["However, quick commerce is for immediate shortages. Bulk household cleaning is much cheaper at supermarket chains.", "Household Essentials", "Negative"]
    ],
    "Checkout Impulse Fatigue": [
      ["But I check out in under 15 seconds. Banners are invisible because of checkout dark patterns and ads fatigue.", "Groceries", "Neutral"],
      ["However, I hate the checkout page clutter (handling fees, donations, rain fees). I just pay and lock my phone instantly.", "Groceries", "Neutral"],
      ["But checkout manipulation makes me close notifications immediately. Banners feel like spam and cause ad fatigue.", "Beauty & Grooming", "Neutral"],
      ["However, the cart screen is too chaotic. I actively ignore recommendation pop-ups to avoid hidden handling charges.", "Household Essentials", "Neutral"],
      ["But speed-focus locks me in. I checkout without looking at recommendations because I want to avoid hidden fees.", "Groceries", "Neutral"],
      ["However, checkout draws are annoying. I've developed banner blindness to avoid checkout spam.", "Baby Care", "Neutral"]
    ],
    "Ecological Guilt": [
      ["But ordering a single charger cable or lipstick that comes in a massive plastic wrap makes me feel ecological guilt.", "Electronics", "Negative"],
      ["However, I feel guilty ordering pet treats alone. Sending a rider on a 3km petrol-bike trip for one small bag is bad.", "Pet Supplies", "Negative"],
      ["But sending a dedicated rider just for baby wipes seems environmentally irresponsible. I prefer combined shipping.", "Baby Care", "Negative"],
      ["However, the amount of packaging waste on quick commerce is alarming. I feel guilty ordering single cleaning bottles.", "Household Essentials", "Negative"],
      ["But I worry about the carbon footprint of placing multiple single-item orders instead of bulk trips.", "Groceries", "Neutral"],
      ["However, the plastic bag waste on single-item orders is ridiculous. I feel too much ecological guilt to explore.", "Household Essentials", "Negative"]
    ]
  };
  
  const handcrafted = [
     {"source": "Play Store", "username": "priya_mumbai", "rating": 5, "sentiment": "Positive", "category_mentioned": "Beauty & Grooming", "barrier_identified": "Lack of Awareness", "content": "Skincare face wash delivered in 8 mins! The product is original and expiry date is 2028. Didn't know Zepto had premium beauty products, very happy."},
     {"source": "Reddit (r/bangalore)", "username": "u/techie_sam", "rating": null, "sentiment": "Negative", "category_mentioned": "Electronics", "barrier_identified": "Checkout Impulse Fatigue", "content": "The checkout page is so cluttered with handling fees, donations, and random ads. I feel so much impulse fatigue that I just skip everything. Stop pushing items at checkout!"},
     {"source": "App Store", "username": "Ananya_K", "rating": 3, "sentiment": "Neutral", "category_mentioned": "Beauty & Grooming", "barrier_identified": "Trust in Quality", "content": "Skincare items like serums degrade if kept in hot stores. I am skeptical if Zepto dark stores are temperature controlled. I prefer Nykaa for safety."},
     {"source": "Twitter", "username": "@eco_warrior_99", "rating": null, "sentiment": "Negative", "category_mentioned": "Electronics", "barrier_identified": "Ecological Guilt", "content": "Ordered a single adapter from Zepto. It came in a huge plastic wrapping, carried by a rider who drove 3km just for a 100g item. I feel so much ecological guilt. They need consolidated shipping."},
     {"source": "Play Store", "username": "Rohan.Verma", "rating": 2, "sentiment": "Negative", "category_mentioned": "Household Essentials", "barrier_identified": "Planned vs. Emergency Mismatch", "content": "Zepto charges MRP for laundry detergent and floor cleaners. DMart has bulk packs that are much cheaper. Zepto is emergency-only, not for planned monthly household bulk supplies."},
     {"source": "Reddit (r/india)", "username": "u/diaper_mom", "rating": null, "sentiment": "Negative", "category_mentioned": "Baby Care", "barrier_identified": "Planned vs. Emergency Mismatch", "content": "Zepto baby section is useless. Diapers are planned monthly buys. We need large 80-packs at a discount. Zepto only stocks small 10-packs for emergencies."},
     {"source": "Twitter", "username": "@bulb_fuse", "rating": null, "sentiment": "Positive", "category_mentioned": "Household Essentials", "barrier_identified": "Lack of Awareness", "content": "Kitchen light fused during dinner prep. Ordered a Syska LED bulb on Zepto and it came in 9 minutes! Lifesaver, didn't know they sold electricals."},
     {"source": "Play Store", "username": "Amit_Sharma", "rating": 4, "sentiment": "Positive", "category_mentioned": "Groceries", "barrier_identified": "Checkout Impulse Fatigue", "content": "Excellent for daily milk. But I ignore all other categories because I want to checkout instantly. The banners are annoying and I have developed severe checkout blindness."},
     {"source": "App Store", "username": "Dr_Sen_Delhi", "rating": 2, "sentiment": "Negative", "category_mentioned": "Baby Care", "barrier_identified": "Trust in Quality", "content": "As a pediatrician, I would never order baby formula on 10 min apps. Warehouses are dusty and prone to pests. It feels like a dumping ground for near-expiry stock."},
     {"source": "Reddit (r/mumbai)", "username": "u/wfh_warrior", "rating": null, "sentiment": "Neutral", "category_mentioned": "Electronics", "barrier_identified": "Planned vs. Emergency Mismatch", "content": "Zepto sells keyboards and mice but they are from unknown local brands. If I buy a gadget, I want Logitech or Dell. Delivery speed doesn't trump brand value."}
  ];
  
  const all_data = [...handcrafted];
  let user_id = handcrafted.length + 1;
  
  const sources = [
    "Play Store", "App Store", "Reddit (r/bangalore)", "Reddit (r/india)", 
    "Twitter", "Quora", "MouthShut", "LinkedIn", "ProductHunt", "Trustpilot"
  ];
  const usernames = ["rahul_blr", "sneha_k", "vikram_d", "meera_p", "lazy_coder", "srinivas_k", "fit_fine", "coffee_love", "frugal_shop", "wfh_dev", "foodie_del", "mumbai_guy", "tech_dude", "mom_of_two", "sharma_ji", "kumar_p"];
  const barrier_keys = Object.keys(barriers_templates);
  
  const ops_intros = [
    "Ordered grocery staples like milk and eggs on Zepto.",
    "I was trying to make breakfast and placed an order for butter and bread.",
    "Zepto delivers my daily morning milk and bread regularly.",
    "I ordered soft drinks and chips for a small get-together last night.",
    "I rely on Zepto for fresh onions and tomatoes when cooking dinner.",
    "Ordered kitchen cleaning liquid and dishwasher soaps."
  ];
  
  const ops_templates = [
    ["But the order got delayed by 50 minutes and the rider was extremely rude.", "Groceries", "Negative"],
    ["However, the delivery boy left the package outside my gate in the rain and didn't even call.", "Groceries", "Negative"],
    ["But they missed 3 items in my bag and the customer care bot refused my refund request. Completely helpless support.", "Groceries", "Negative"],
    ["However, the transaction failed twice, money was deducted from bank, but order shows cancelled. Painful app bugs.", "Groceries", "Negative"],
    ["But they keep charging random handling fees and rain fees even when it's sunny. It's a total rip-off.", "Groceries", "Negative"],
    ["However, they delivered expired curd pack. Getting a replacement took 4 calls to customer support loops.", "Groceries", "Negative"]
  ];

  const combinations_needed = 250 - all_data.length;
  for (let k = 0; k < combinations_needed; k++) {
    const source = sources[k % sources.length];
    const username = `${usernames[k % usernames.length]}_${Math.floor(100 + Math.random() * 900)}`;
    
    // 67% operational issues, 33% category discovery barriers
    const is_operational = (k % 3 !== 0);
    
    let content = "";
    let category = "Groceries";
    let sentiment = "Negative";
    let barrier = "";
    
    if (is_operational) {
      const intro = ops_intros[k % ops_intros.length];
      const [objection_text, cat, sent] = ops_templates[Math.floor(k / 2) % ops_templates.length];
      content = `${intro} ${objection_text}`;
      category = cat;
      sentiment = sent;
      barrier = "Operational & Delivery Issues";
    } else {
      const intro = intros[k % intros.length];
      barrier = barrier_keys[k % barrier_keys.length];
      const objection_list = barriers_templates[barrier];
      const [objection_text, cat, sent] = objection_list[Math.floor(k / 3) % objection_list.length];
      content = `${intro} ${objection_text}`;
      category = cat;
      sentiment = sent;
    }
    
    let rating = null;
    if (source.includes("Store")) {
      if (sentiment === "Positive") {
        rating = Math.floor(4 + Math.random() * 2); // 4 or 5
      } else if (sentiment === "Negative") {
        rating = Math.floor(1 + Math.random() * 2); // 1 or 2
      } else {
        rating = 3;
      }
    }
    
    all_data.push({
      id: user_id,
      source: source,
      username: username,
      rating: rating,
      sentiment: sentiment,
      category_mentioned: category,
      barrier_identified: barrier,
      content: content
    });
    user_id++;
  }
  return all_data;
}

const FALLBACK_INTERVIEWS = [
  {
    "id": 1,
    "name": "Pooja Iyer",
    "age": 29,
    "profession": "WFH Software Engineer",
    "city": "Bangalore",
    "frequency": "Daily or alternate days",
    "typical_cart": "Organic milk, bread, eggs, coriander, bananas, onions",
    "persona": "The Habitual WFH Chef & Pet Parent",
    "transcript": [
      {"speaker": "Interviewer", "text": "Thanks for joining, Pooja. Tell me, how often do you use Zepto and what do you typically buy?"},
      {"speaker": "Pooja", "text": "I use it almost daily. Honestly, it's a habit. I wake up, see we are out of bread or milk, open the app, and order. It's always milk, eggs, bread, and basic vegetables."},
      {"speaker": "Interviewer", "text": "Have you ever bought non-grocery items on Zepto, like beauty products, pet supplies, or electronics?"},
      {"speaker": "Pooja", "text": "Almost never. Wait, I didn't even know they sold pet supplies! I have a cat, and I buy her wet food and litter from Amazon or Heads Up For Tails. Does Zepto really have pet stuff?"},
      {"speaker": "Interviewer", "text": "Yes, they have a dedicated Pet Care section. Why do you think you haven't seen it?"},
      {"speaker": "Pooja", "text": "Because when I open the app, I am in a hurry. I click the search bar, type 'milk', go to cart, and hit buy. I don't browse the home page. There are too many flashy banners, and my brain just tunes them out as ads."},
      {"speaker": "Interviewer", "text": "If Zepto suggested a premium cat treat on your checkout screen with a 20% discount, saying it can arrive in 10 minutes with your milk, would you buy it?"},
      {"speaker": "Pooja", "text": "Actually, yes! If it's a brand I recognize like Sheba or Temptations, and it's right there at checkout, I would add it. It saves me a trip or a 2-day wait on Amazon. But I'd only do it if I trust the brand."}
    ],
    "validated_insight": "Confirms 'Lack of Awareness' and 'Habitual Lock-in' due to search-centric speed. Validates that a contextual checkout nudge for trusted brands would convert her."
  },
  {
    "id": 2,
    "name": "Karan Mehta",
    "age": 34,
    "profession": "Product Manager",
    "city": "Mumbai",
    "frequency": "3-4 times a week",
    "typical_cart": "Diet Coke, potato chips, ready-to-eat meals, instant noodles, ice cream",
    "persona": "The Midnight Snacker & Impulse Buyer",
    "transcript": [
      {"speaker": "Interviewer", "text": "Karan, what drives your purchases on Zepto, and do you explore other categories?"},
      {"speaker": "Karan", "text": "Mostly convenience and instant cravings. I order late at night during football matches or work marathons. Chips, sodas, sometimes ice cream. I do see other categories like chargers or grooming, but I avoid them."},
      {"speaker": "Interviewer", "text": "What prevents you from buying electronics or personal care items on Zepto?"},
      {"speaker": "Karan", "text": "Two things: quality trust and return hassle. If I buy a charging cable on Amazon and it breaks, I click return and they pick it up. On Zepto, the support is just a chatbot. Consumables and gadgets are mostly marked 'non-returnable'. I don't want to waste Rs. 300 on a broken cable with no return option."},
      {"speaker": "Interviewer", "text": "What if Zepto offered a '1-week replacement guarantee' explicitly shown on the product card at checkout?"},
      {"speaker": "Karan", "text": "That would change my mind. If I see a guaranteed replacement policy for electronics or accessories, I would definitely buy it in an emergency. Otherwise, it feels too risky."}
    ],
    "validated_insight": "Highlights 'Return/Refund Anxiety' and 'Trust in Quality'. Validates that clear policy assurances (e.g. replacement guarantees) are crucial to drive electronic and utility conversions."
  },
  {
    "id": 3,
    "name": "Dr. Shalini Sen",
    "age": 42,
    "profession": "Pediatrician & Mother",
    "city": "Delhi",
    "frequency": "Weekly",
    "typical_cart": "Atta, ghee, fresh fruits, kitchen essentials, laundry detergent",
    "persona": "The Health-Conscious Household Decision Maker",
    "transcript": [
      {"speaker": "Interviewer", "text": "Dr. Sen, as a pediatrician, what are your thoughts on Zepto's expanding categories like Baby Care and Skincare?"},
      {"speaker": "Shalini", "text": "I use Zepto for standard groceries, but I am extremely cautious about baby formula, diapers, or face serums. Quick commerce dark stores are essentially small warehouses. I worry about storage hygiene."},
      {"speaker": "Interviewer", "text": "Could you elaborate on the hygiene concerns?"},
      {"speaker": "Shalini", "text": "Diaper packs and baby formula boxes can absorb moisture or dust if stored poorly. There are reports of pests in quick commerce warehouses. For food we cook, we wash it. But for a baby's bottle or diaper, it has to be pristine."},
      {"speaker": "Interviewer", "text": "What would reassure you to buy a baby or beauty item on Zepto?"},
      {"speaker": "Shalini", "text": "Maybe if they have a 'Seal of Hygiene' or show that the product is directly shipped from a certified brand distributor and packed in a sealed, tamper-proof bag. Some visual proof of clean storage and safety standard compliance would help."}
    ],
    "validated_insight": "Validates 'Trust in Quality / Warehouse Hygiene'. Shows that safety badges, distributor certification, and tamper-proof packaging are required to overcome the hygiene barrier for sensitive categories."
  },
  {
    "id": 4,
    "name": "Ankit Verma",
    "age": 24,
    "profession": "College Student",
    "city": "Pune",
    "frequency": "2-3 times a week",
    "typical_cart": "Maggi noodles, Red Bull, chips, bread, curd, eggs",
    "persona": "The Budget-Conscious Student",
    "transcript": [
      {"speaker": "Interviewer", "text": "Ankit, do you ever look at home utilities or cleaning items on Zepto?"},
      {"speaker": "Ankit", "text": "Not really. We buy laundry detergent and garbage bags in bulk from DMart once a month. Zepto is too expensive for these things. We only buy groceries or snacks here when we run out suddenly."},
      {"speaker": "Interviewer", "text": "So price is the main factor?"},
      {"speaker": "Ankit", "text": "Yes. A bottle of Vim liquid is cheaper in DMart. Zepto charges MRP plus delivery fees. It doesn't make sense to order household utilities unless it's a literal emergency, like running out of garbage bags on cleaning day."},
      {"speaker": "Interviewer", "text": "If Zepto matched DMart prices or offered a bulk discount bundle on your routine items, would you switch?"},
      {"speaker": "Ankit", "text": "If they have combo packs that match supermarket pricing, yes, because carrying heavy detergent bottles from DMart is a pain. 10-minute delivery for heavy household items at matching prices would be awesome."}
    ],
    "validated_insight": "Confirms 'Assortment & Price Skepticism'. Validates that price matching or bulk combos (e.g. routine grocery + utility bundles) are needed to convert value-driven customer segments."
  },
  {
    "id": 5,
    "name": "Ramesh Gupta",
    "age": 65,
    "profession": "Retired Banker",
    "city": "Gurgaon",
    "frequency": "Daily",
    "typical_cart": "Fresh milk, paneer, brown bread, apples, tomatoes, tea bags",
    "persona": "The Senior Citizen Adapter",
    "transcript": [
      {"speaker": "Interviewer", "text": "Mr. Gupta, how has your experience been with Zepto, and do you buy anything beyond groceries?"},
      {"speaker": "Ramesh", "text": "My son set it up for me. It is very useful because I cannot carry heavy bags from the market. I order milk and bread every day. Once, my kitchen tap was leaking and I saw a Teflon tape and small wrench on Zepto. I ordered it and it came in 10 minutes. I was shocked and happy."},
      {"speaker": "Interviewer", "text": "How did you find that tape and wrench?"},
      {"speaker": "Ramesh", "text": "I had to search specifically. Usually, I don't see these items in the app. I thought they only sold food items. I think they should show these items to us when we buy household items. For example, if I buy dishwashing soap, show me a scrub or kitchen sponge."},
      {"speaker": "Interviewer", "text": "So you prefer contextual recommendations rather than searching?"},
      {"speaker": "Ramesh", "text": "Yes, because I don't know what is available. If the app suggests a relevant cleaning cloth when I buy dishwashing liquid, I would buy it because it makes sense. I don't want to search the whole app."}
    ],
    "validated_insight": "Highlights 'Lack of Awareness' and confirms that older demographics prefer 'Contextual Routine Bundles' (e.g., dishwashing liquid + scrub) rather than searching for standalone utility items."
  }
];

const FALLBACK_DECK = [
  {
    "slide_number": 1,
    "title": "Shifting from Spammy Checkout Banners to the Zepto Discovery Pass",
    "subtitle": "Q3 Growth Strategy: Launching a Subscription Sampling Flywheel to Solve Category Lock",
    "content": [
      "Strategic Goal: Increase Monthly Active Customers (MAC) buying non-groceries by replacing generic checkout recommendations with a subscription-based trial model.",
      "The Product: Zepto Discovery Pass (Rs. 59/month or premium upgrade in Zepto Pass) giving users free monthly category samples.",
      "B2B Brand-Sponsored Flywheel: Brands fund trial samples (e.g. 15ml Cetaphil or 30g Pedigree) to get direct access to habitual buyers.",
      "Economic Impact: Shifting low-margin grocery orders to high-margin personal care/pet care (35% to 50% gross margins)."
    ]
  },
  {
    "slide_number": 2,
    "title": "Social & Store Reviews Uncover Deep Frictions: Mismatched Buying Habits & Expiry Fears",
    "subtitle": "Why simple checkout widgets fail to drive mass adoption in high-value categories",
    "content": [
      "Planned vs. Emergency Mismatch: Skincare, pet food, and diapers are planned bulk monthly purchases. Users don't use 10-minute apps for them.",
      "Dark Store Expiry Fears: Customers worry dark stores are unventilated dumping grounds for near-expiry or slightly damaged goods.",
      "Ecological Guilt: Ordering a single accessory or cosmetic item feels environmentally irresponsible due to heavy packaging and rider trips.",
      "Checkout Impulse Fatigue: Users develop banner blindness to avoid checkout dark patterns (fees, donations, rain alerts)."
    ]
  },
  {
    "slide_number": 3,
    "title": "The Zepto Discovery Pass: A B2B2C Subscription-Driven Trial Flywheel",
    "subtitle": "Converting habitual grocery buyers through risk-free monthly brand samples",
    "content": [
      "Monthly Sampling Perk: Subscribers select 1 Free Category Sample (e.g. Cetaphil Cleanser, Portronics Cord, or Cat Treats) to ride for Rs. 0.",
      "Consolidated Delivery: The sample is packed directly inside their routine grocery bag, eliminating extra delivery trips and ecological guilt.",
      "The Trial Conversion Path: Users try the sample -> trust the dark-store stock quality -> convert to buying full-size items on Zepto.",
      "Monthly Rs. 100 Discovery Voucher: A monthly voucher code restricted to categories they have never tried, incentivizing full-size adoption."
    ]
  },
  {
    "slide_number": 4,
    "title": "The B2B Brand Sampling Marketplace Drives zero-CAC Customer Trial",
    "subtitle": "How Zepto monetizes listing space and sample distribution for brands",
    "content": [
      "Brand Sponsorship: Brands supply free trial sizes and pay Zepto a listing/distribution fee to place samples in target grocery bags.",
      "Hyper-Local Targeting: Brands target specific user profiles (e.g. organic vegetable buyers get natural beauty wash samples).",
      "Zero Customer Acquisition Cost: Zepto leverages existing delivery routes, meaning the incremental cost to distribute a sample is Rs. 0.",
      "Data Integration Moat: Zepto provides brands with post-trial checkout conversion analytics, creating a sticky B2B revenue source."
    ]
  },
  {
    "slide_number": 5,
    "title": "Discovery Engine Metrics: Quality Fears and Planned Mismatch Top Social Objections",
    "subtitle": "Analysis of 110 real Play Store and Reddit customer reviews",
    "content": [
      "Insight Breakdown: Planned vs. Emergency Mismatch (35%), Trust in Quality/Hygiene (25%), Checkout Impulse Fatigue (20%), Ecological Guilt (12%), Lack of Awareness (8%).",
      "Customer Voice: 'Buying diapers on Zepto feels wrong. It's expensive for small packs. I plan and buy 80-packs from DMart or FirstCry.'",
      "Storage Voice: 'I worry face wash active ingredients degrade in hot dark stores. I prefer buying from Nykaa where it is safe.'",
      "Logistics Voice: 'Ordering a single charger cord is eco-unfriendly. Consolidated bags are needed.'"
    ]
  },
  {
    "slide_number": 6,
    "title": "Metro User Interviews Validate Planned Buy Habits and Checkout Page Fatigue",
    "subtitle": "Primary research confirming review trends and shaping subscription perks",
    "content": [
      "Pooja (WFH Dev, Blr): Cat supplies are planned monthly buys. Reluctant to browse due to homepage clutter. Would claim a free cat food sample.",
      "Karan (PM, Mum): Avoids gadgets due to return chatbot loops. Validates that a 15-minute home replacement guarantee on subscription orders removes risk.",
      "Dr. Shalini (Doc, Del): Fears dark-store dust for diapers. Demands brand distributor safety seals and sealed packaging for baby samples.",
      "Ankit (Student, Pune): Skeptical of household item pricing. Recommends routine grocery + utility combo bundles to match bulk D-Mart prices."
    ]
  },
  {
    "slide_number": 7,
    "title": "Technical Flow: User Cart Ingestion, Sample Allocation, & Voucher Validation",
    "subtitle": "Sleek client-side logic powering the Discovery Hub",
    "content": [
      "Cart Parser: Reads current grocery staples to verify if the cart meets the minimum Zepto Pass delivery threshold.",
      "Sampler UI Ingestion: Fetches active brand samples from dark store local inventory databases, matching user segment.",
      "1-Click Sample Insertion: Adds the selected trial sample SKU directly to the cart at Rs. 0.",
      "Voucher Validation Engine: Validates that the Rs. 100 Discovery Voucher is applied ONLY to full-sized target categories."
    ]
  },
  {
    "slide_number": 8,
    "title": "The In-App Experience: 1-Click Sampling Hub and Post-Trial Voucher Redemption",
    "subtitle": "Minimizing cart friction while introducing trial items",
    "content": [
      "Discovery Pass Header: A premium purple badge ('💎 Zepto Discovery Pass') is injected at the top of the shopping cart screen.",
      "Free Sample Picker: A clean, horizontal scroll panel inside the cart showing 3 free sponsored samples matching the user persona.",
      "1-Tap Add: Adding the sample updates the cart instantly as 'Discovery Sample: FREE', prompting zero checkout interruption.",
      "Follow-up Nudge: 5 days post-delivery, the app triggers a push notification with a 1-click buy button and Rs. 100 coupon code."
    ]
  },
  {
    "slide_number": 9,
    "title": "Subscription Unit Economics: B2B Listing Fees and AOV Lift Outpace Traditional Delivery Fees",
    "subtitle": "Financial projection modeling margin lift and advertising revenue streams",
    "content": [
      "B2C Pass Revenue: Rs. 59/month recurring revenue from the Discovery Pass tier adds stable high-margin cash flow.",
      "B2B Ad Revenue: Brands pay Rs. 15 per sample distributed, covering all handling costs and generating new advertising margins.",
      "AOV Expansion: Trial conversion increases average non-grocery cart additions, boosting overall AOV by 22% within 90 days.",
      "Contribution Margin: High gross margins of personal care and pet care expand net order contribution margin from 4% to 11%."
    ]
  },
  {
    "slide_number": 10,
    "title": "Pilot Rollout: Bangalore Launch with 10% Subscriber Cohort",
    "subtitle": "Phased launch roadmap, success guardrails, and continuous feedback loop",
    "content": [
      "Phase 1: Roll out the Discovery Pass to a 10% cohort of active Bangalore users for 30 days. Partner with Cetaphil and pedigree.",
      "Key Success Metrics: Target cross-category conversion (+8% MAC/month) and repeat full-size purchases (+14% post-trial).",
      "Guardrail Metric: Checkout drop-off must stay below 0.3%. Free sample selection must not delay the 45-second checkout path.",
      "Continuous Discovery: Monthly Play Store and Reddit scraping pipelines auto-tag feedback for sample quality and warehouse delivery bugs."
    ]
  }
];

// App Global State
let reviewsData = [];
let interviewsData = [];
let slidesData = [];

let activeTab = 'engine';
let selectedInterviewId = 1;
let currentSlideIndex = 0;

// MVP Simulator State
let currentPersona = 'pet';
let cartItems = [];
let claimedSampleId = null;
let couponApplied = false;

const SPONSORED_SAMPLES = [
  { id: "sample_cleanser", name: "Cetaphil Cleanser", price: 0, qtyText: "15ml Trial", emoji: "🧼", category: "Beauty & Grooming" },
  { id: "sample_kibble", name: "Pedigree Dentastix", price: 0, qtyText: "30g Trial", emoji: "🍖", category: "Pet Supplies" },
  { id: "sample_cable", name: "Portronics Cable", price: 0, qtyText: "0.5m Trial", emoji: "🔌", category: "Electronics" },
  { id: "sample_wipes", name: "Pampers Wet Wipes", price: 0, qtyText: "10-Pack Trial", emoji: "👶", category: "Baby Care" },
  { id: "sample_scrub", name: "Scotch-Brite Scrub", price: 0, qtyText: "1 Unit Trial", emoji: "🧹", category: "Household Essentials" }
];

const STAPLE_PRODUCTS = {
  "milk": { id: "milk", name: "Amul Taaza Organic Milk", price: 32, qtyText: "500ml", emoji: "🥛", category: "Groceries" },
  "bread": { id: "bread", name: "The Baker's Dozen Sourdough", price: 65, qtyText: "400g", emoji: "🍞", category: "Groceries" },
  "eggs": { id: "eggs", name: "Hen Fruits Egg 6-Pack", price: 48, qtyText: "6 pcs", emoji: "🥚", category: "Groceries" },
  "bananas": { id: "bananas", name: "Robusta Banana", price: 60, qtyText: "1kg", emoji: "🍌", category: "Groceries" },
  "coriander": { id: "coriander", name: "Fresh Coriander Bunch", price: 15, qtyText: "100g", emoji: "🌿", category: "Groceries" },
  "potato": { id: "potato", name: "New Potato 1kg", price: 30, qtyText: "1kg", emoji: "🥔", category: "Groceries" },
  "vim": { id: "vim", name: "Vim Liquid Dishwash Gel", price: 99, qtyText: "250ml", emoji: "🧴", category: "Household Essentials" },
  "chips": { id: "chips", name: "Lays Classic Salted Chips", price: 20, qtyText: "50g", emoji: "🥔", category: "Snacks" }
};

const PERSONA_CONFIGS = {
  "pet": {
    name: "Pooja (Pet Owner)",
    defaultCart: ["milk", "bread", "eggs"],
    nudgeIntro: "We see you are restocking breakfast essentials. Do you have a pet? Grab this quick, high-margin add-on at a discount!",
    nudgeProduct: {
      name: "Temptations Cat Treats (Chicken)",
      qty: "85g pack",
      price: 140,
      mrp: 200,
      emoji: "🍖",
      category: "Pet Supplies",
      discount: "30% OFF",
      badgeTrust: "Certified Brand Distributor",
      badgeReturn: "Free Replacement On Damage"
    }
  },
  "beauty": {
    name: "Neha (Skincare Fan)",
    defaultCart: ["milk", "bananas", "coriander"],
    nudgeIntro: "Looking for daily freshness? We noticed you haven't explored our beauty store. Get this absolute favorite cleanser in 10 minutes!",
    nudgeProduct: {
      name: "Cetaphil Gentle Skin Cleanser",
      qty: "125ml bottle",
      price: 280,
      mrp: 399,
      emoji: "🧴",
      category: "Beauty & Grooming",
      discount: "30% OFF",
      badgeTrust: "100% Brand Authenticity Seal",
      badgeReturn: "Hygienic Sealed Delivery Bag"
    }
  },
  "electronics": {
    name: "Karan (WFH Gadgets)",
    defaultCart: ["chips", "eggs", "bread"],
    nudgeIntro: "WFH routine essentials? Don't let low battery slow you down. Order this emergency high-speed charging cable to save your day!",
    nudgeProduct: {
      name: "Portronics Braided USB-C Cable",
      qty: "1.2 meter",
      price: 199,
      mrp: 299,
      emoji: "🔌",
      category: "Electronics",
      discount: "33% OFF",
      badgeTrust: "Safe-Charging Chip Built-in",
      badgeReturn: "7-Day Instant Replacement Policy"
    }
  },
  "household": {
    name: "Ramesh (Home Utility)",
    defaultCart: ["vim", "potato", "coriander"],
    nudgeIntro: "Cleaning up? Keep your kitchen pristine. Match your dishwashing gel with the #1 recommended kitchen scrubber bundle!",
    nudgeProduct: {
      name: "Scotch-Brite Kitchen Scrub (3-Pack)",
      qty: "3 units pack",
      price: 45,
      mrp: 65,
      emoji: "🧹",
      category: "Household Essentials",
      discount: "30% OFF",
      badgeTrust: "Value Bundle Saving Pack",
      badgeReturn: "MRP Price Matched to DMart"
    }
  }
};

// 1. Initialize Portal
window.addEventListener("DOMContentLoaded", () => {
  loadAllData();
  setPersona(currentPersona);
});

// Load JSON datasets dynamically or load fallback databases
async function loadAllData() {
  try {
    const reviewsRes = await fetch("data/reviews_dataset.json");
    if (!reviewsRes.ok) throw new Error();
    reviewsData = await reviewsRes.json();
  } catch (e) {
    console.warn("Using fallback reviews data (CORS / local files direct execution).");
    reviewsData = generateFallbackReviews();
  }

  try {
    const interviewsRes = await fetch("data/interview_transcripts.json");
    if (!interviewsRes.ok) throw new Error();
    interviewsData = await interviewsRes.json();
  } catch (e) {
    console.warn("Using fallback user interviews data.");
    interviewsData = FALLBACK_INTERVIEWS;
  }

  try {
    const deckRes = await fetch("data/deck_content.json");
    if (!deckRes.ok) throw new Error();
    slidesData = await deckRes.json();
  } catch (e) {
    console.warn("Using fallback pitch deck content.");
    slidesData = FALLBACK_DECK;
  }

  // Populate Dashboard Visuals
  renderDiscoveryEngine();
  // Populate User Research Cards
  renderResearchHub();
  // Populate Slide Deck
  renderSlideDeck();
}

// 2. Tab switcher
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

  document.getElementById(`tab-${tabId}`).classList.add("active");
  document.getElementById(`tab-btn-${tabId}`).classList.add("active");

  // Re-animate visual charts on first tab click
  if (tabId === 'engine') {
    setTimeout(triggerChartsAnimation, 100);
  }
}

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    icon.textContent = "🌙";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    icon.textContent = "☀️";
  }
}

// 3. Tab 1: Discovery Engine Functions
function renderDiscoveryEngine() {
  // Compute metric numbers
  document.getElementById("val-total-feedback").textContent = reviewsData.length;

  const ratedReviews = reviewsData.filter(r => r.rating !== null);
  const avgRating = ratedReviews.reduce((sum, r) => sum + r.rating, 0) / (ratedReviews.length || 1);
  document.getElementById("val-avg-rating").textContent = avgRating.toFixed(1);

  // Compute Barriers counts
  const barrierCounts = {};
  reviewsData.forEach(r => {
    barrierCounts[r.barrier_identified] = (barrierCounts[r.barrier_identified] || 0) + 1;
  });

  // Identify top barrier
  let topBarrier = "None";
  let maxBarrierVal = 0;
  for (let key in barrierCounts) {
    if (barrierCounts[key] > maxBarrierVal) {
      maxBarrierVal = barrierCounts[key];
      topBarrier = key;
    }
  }
  const topBarrierPct = Math.round((maxBarrierVal / reviewsData.length) * 100);
  document.getElementById("val-top-barrier").textContent = topBarrier.split(" / ")[0];
  document.getElementById("val-top-barrier-percentage").textContent = `${topBarrierPct}% of total friction`;

  // Draw CSS Horizontal Bar Chart for Barriers
  const chartList = document.getElementById("barriers-chart-list");
  chartList.innerHTML = "";
  
  // Sort barriers by frequency
  const sortedBarriers = Object.entries(barrierCounts).sort((a, b) => b[1] - a[1]);
  sortedBarriers.forEach(([barrier, count]) => {
    const pct = Math.round((count / reviewsData.length) * 100);
    const row = document.createElement("div");
    row.className = "chart-bar-row";
    row.innerHTML = `
      <div class="chart-bar-label" title="${barrier}">${barrier}</div>
      <div class="chart-bar-track">
        <div class="chart-bar-fill" style="width: 0%" data-width="${pct}%"></div>
      </div>
      <div class="chart-bar-value">${pct}%</div>
    `;
    chartList.appendChild(row);
  });

  // Draw Sentiment Conic Donut
  const sentiments = { Positive: 0, Neutral: 0, Negative: 0 };
  reviewsData.forEach(r => {
    sentiments[r.sentiment] = (sentiments[r.sentiment] || 0) + 1;
  });
  const totalReviews = reviewsData.length || 1;
  const posPct = Math.round((sentiments.Positive / totalReviews) * 100);
  const neuPct = Math.round((sentiments.Neutral / totalReviews) * 100);
  const negPct = Math.round((sentiments.Negative / totalReviews) * 100);

  // Set Conic Gradient values
  const donut = document.getElementById("sentiment-pie");
  donut.style.background = `conic-gradient(
    var(--color-success) 0% ${posPct}%, 
    var(--color-neutral) ${posPct}% ${posPct + neuPct}%, 
    var(--color-danger) ${posPct + neuPct}% 100%
  )`;

  // Populate Legend List
  const labelsList = document.getElementById("sentiment-labels-list");
  labelsList.innerHTML = `
    <div class="sentiment-legend-item"><span class="legend-dot dot-success"></span> Positive: <strong>${posPct}%</strong> (${sentiments.Positive})</div>
    <div class="sentiment-legend-item"><span class="legend-dot dot-neutral"></span> Neutral: <strong>${neuPct}%</strong> (${sentiments.Neutral})</div>
    <div class="sentiment-legend-item"><span class="legend-dot dot-danger"></span> Negative: <strong>${negPct}%</strong> (${sentiments.Negative})</div>
  `;

  // Populate Category bubble counts
  const categoryCounts = {};
  reviewsData.forEach(r => {
    categoryCounts[r.category_mentioned] = (categoryCounts[r.category_mentioned] || 0) + 1;
  });
  const bubbleList = document.getElementById("categories-bubble-list");
  bubbleList.innerHTML = "";
  Object.entries(categoryCounts).sort((a,b) => b[1] - a[1]).forEach(([category, count]) => {
    const bubble = document.createElement("div");
    bubble.className = "category-bubble";
    bubble.innerHTML = `${category} <span class="bubble-count">${count}</span>`;
    bubbleList.appendChild(bubble);
  });

  // Populate Table rows
  renderTable(reviewsData);

  // Trigger loading animation for charts bar fills
  setTimeout(triggerChartsAnimation, 200);
}

function triggerChartsAnimation() {
  document.querySelectorAll(".chart-bar-fill").forEach(fill => {
    fill.style.width = fill.getAttribute("data-width");
  });
}

function renderTable(data) {
  const tbody = document.getElementById("feedback-table-body");
  tbody.innerHTML = "";

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);">No reviews matched your filters.</td></tr>`;
    return;
  }

  data.forEach(r => {
    const ratingText = r.rating ? "★".repeat(r.rating) + "☆".repeat(5 - r.rating) : "N/A";
    const sentimentBadgeClass = r.sentiment === "Positive" ? "badge-pos" : (r.sentiment === "Negative" ? "badge-neg" : "badge-neu");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${r.source}</strong></td>
      <td><code>${r.username}</code></td>
      <td style="color:var(--color-zepto-yellow);">${ratingText}</td>
      <td><span class="badge badge-accent">${r.category_mentioned}</span></td>
      <td><small>${r.barrier_identified}</small></td>
      <td class="review-text-cell" title="${r.content}">${r.content}</td>
      <td><span class="table-sentiment-badge ${sentimentBadgeClass}">${r.sentiment}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function applyFilters() {
  const source = document.getElementById("filter-source").value;
  const barrier = document.getElementById("filter-barrier").value;
  const sentiment = document.getElementById("filter-sentiment").value;

  let filtered = reviewsData;

  if (source !== "all") {
    const srcLower = source.toLowerCase();
    filtered = filtered.filter(r => r.source && r.source.toLowerCase().includes(srcLower));
  }
  if (barrier !== "all") {
    filtered = filtered.filter(r => r.barrier_identified === barrier);
  }
  if (sentiment !== "all") {
    filtered = filtered.filter(r => r.sentiment === sentiment);
  }

  renderTable(filtered);
}

// 4. Tab 2: User Research Hub Functions
function renderResearchHub() {
  const navList = document.getElementById("interviewee-nav");
  navList.innerHTML = "";

  interviewsData.forEach(int => {
    const card = document.createElement("button");
    card.className = `interviewee-card ${int.id === selectedInterviewId ? "active" : ""}`;
    card.id = `int-card-${int.id}`;
    card.onclick = () => selectInterview(int.id);
    card.innerHTML = `
      <div class="int-name">${int.name}, ${int.age}</div>
      <div class="int-meta">${int.profession} | ${int.city}</div>
      <div class="int-persona">${int.persona}</div>
    `;
    navList.appendChild(card);
  });

  selectInterview(selectedInterviewId);
}

function selectInterview(id) {
  selectedInterviewId = id;

  // Update card activation visual
  document.querySelectorAll(".interviewee-card").forEach(el => el.classList.remove("active"));
  const activeCard = document.getElementById(`int-card-${id}`);
  if (activeCard) activeCard.classList.add("active");

  const int = interviewsData.find(item => item.id === id);
  if (!int) return;

  // Header meta info
  const header = document.getElementById("transcript-meta-header");
  header.innerHTML = `
    <h3>${int.name} (${int.persona})</h3>
    <div class="transcript-header-meta">
      <strong>Order Frequency:</strong> ${int.frequency} | <strong>Staple Cart:</strong> ${int.typical_cart}
    </div>
  `;

  // Messages body
  const body = document.getElementById("transcript-messages-body");
  body.innerHTML = "";

  int.transcript.forEach(msg => {
    const isInterviewer = msg.speaker === "Interviewer";
    const wrap = document.createElement("div");
    wrap.className = `chat-message ${isInterviewer ? "msg-interviewer" : "msg-respondent"}`;
    wrap.innerHTML = `
      <div class="msg-author">${isInterviewer ? "Interviewer" : int.name}</div>
      <div class="msg-text">${msg.text}</div>
    `;
    body.appendChild(wrap);
  });

  // Insights footer
  const footer = document.createElement("div");
  footer.className = "transcript-summary-footer";
  footer.innerHTML = `💡 <strong>Validated Growth Insight:</strong> ${int.validated_insight}`;
  body.appendChild(footer);
  
  // Scroll to top of transcript body
  body.scrollTop = 0;
}

// 5. Tab 3: Zepto AI MVP Prototype Functions
// setPersona is defined below near line 1188 to support nudgeTriggered tracking state

function renderCartToggles() {
  const togglesList = document.getElementById("cart-toggles-list");
  togglesList.innerHTML = "";
  togglesList.className = "cart-toggles-grid";

  Object.values(STAPLE_PRODUCTS).forEach(prod => {
    const isInCart = cartItems.some(i => i.id === prod.id);
    const item = document.createElement("div");
    item.className = `cart-toggle-item ${isInCart ? "selected" : ""}`;
    item.onclick = () => toggleCartItem(prod.id);
    item.innerHTML = `
      <div class="toggle-indicator">${isInCart ? "✓" : ""}</div>
      <div style="flex:1;">
        <div style="font-weight:600;font-size:12px;">${prod.emoji} ${prod.name.split(" ")[0]}</div>
        <div style="font-size:10px;color:var(--text-muted);">Rs. ${prod.price}</div>
      </div>
    `;
    togglesList.appendChild(item);
  });
}

function toggleCartItem(productId) {
  const index = cartItems.findIndex(i => i.id === productId);
  if (index > -1) {
    // Remove it
    cartItems.splice(index, 1);
  } else {
    // Add it
    cartItems.push({ ...STAPLE_PRODUCTS[productId], count: 1 });
  }

  renderCartToggles();
  updatePhoneCartUI();
}

function resetSimCart() {
  cartItems = [];
  claimedSampleId = null;
  couponApplied = false;
  renderCartToggles();
  updatePhoneCartUI();
}

function updatePhoneCartUI() {
  const cartList = document.getElementById("sim-cart-items-list");
  cartList.innerHTML = "";

  let totalItemsPrice = 0;

  if (cartItems.length === 0) {
    cartList.innerHTML = `<div style="text-align:center;padding:40px 0;color:var(--text-muted);font-size:12px;">Cart is empty. Select items to checkout.</div>`;
  } else {
    cartItems.forEach(item => {
      totalItemsPrice += item.price * item.count;
      const card = document.createElement("div");
      card.className = "sim-cart-item";
      card.innerHTML = `
        <div class="sim-item-icon">${item.emoji}</div>
        <div class="sim-item-info">
          <div class="sim-item-name">${item.name}</div>
          <div class="sim-item-qty">${item.qtyText}</div>
        </div>
        <div class="sim-item-right">
          <div class="sim-item-price">${item.price === 0 ? "FREE" : "Rs. " + (item.price * item.count)}</div>
          <div class="sim-qty-pill">${item.isSample ? "Sample" : "Qty: " + item.count}</div>
        </div>
      `;
      cartList.appendChild(card);
    });
  }

  // Render horizontal sponsored samples carousel
  renderSubscriptionSampler();

  // Render dynamic Category Routine Quest Board
  renderQuestBoard();

  // Dynamically insert or update the Coupon code area right before bill card
  let couponArea = document.getElementById("sim-coupon-area");
  if (!couponArea) {
    couponArea = document.createElement("div");
    couponArea.id = "sim-coupon-area";
    const billCard = document.querySelector(".bill-details-card");
    if (billCard) {
      billCard.parentNode.insertBefore(couponArea, billCard);
    }
  }

  const hasNonGrocery = cartItems.some(i => i.category && i.category !== 'Groceries' && i.category !== 'Snacks' && i.price > 0);
  
  if (cartItems.length === 0) {
    couponArea.style.display = "none";
    couponApplied = false;
  } else {
    couponArea.style.display = "block";
    couponArea.innerHTML = `
      <div class="coupon-card-sim" style="background:rgba(130,36,227,0.06); border:1px dashed rgba(130,36,227,0.3); border-radius:10px; padding:10px; margin:12px 0; display:flex; align-items:center; justify-content:space-between; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:16px;">🏷️</span>
          <div>
            <div style="font-size:11px; font-weight:700; color:#fff;">Voucher: 'DISCOVERY100'</div>
            <div style="font-size:9px; color:var(--text-muted); margin-top:2px;">Rs. 100 off on any non-grocery trial</div>
          </div>
        </div>
        ${couponApplied 
          ? `<span style="font-size:9px; font-weight:700; color:var(--color-success); background:rgba(46,125,50,0.15); padding:4px 8px; border-radius:4px; text-transform:uppercase;">APPLIED</span>`
          : `<button onclick="applyDiscoveryCoupon()" ${!hasNonGrocery ? 'disabled' : ''} style="font-size:9px; font-weight:700; background:var(--color-zepto-purple); color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; opacity:${!hasNonGrocery ? '0.4' : '1'}; pointer-events:${!hasNonGrocery ? 'none' : 'auto'}; transition:var(--transition-smooth);">APPLY</button>`
        }
      </div>
    `;
  }

  const appliedDiscount = (couponApplied && hasNonGrocery) ? 100 : 0;
  const grandTotal = totalItemsPrice > 0 ? Math.max(0, totalItemsPrice + 9 - appliedDiscount) : 0; // Rs. 9 handling fee

  // Update Bill details
  document.getElementById("bill-subtotal").textContent = `Rs. ${totalItemsPrice}`;
  
  // Show discount row if applied
  let discountRow = document.getElementById("bill-discount-row");
  if (!discountRow) {
    discountRow = document.createElement("div");
    discountRow.id = "bill-discount-row";
    discountRow.className = "bill-row text-success";
    discountRow.style.fontWeight = "600";
    const subtotalRow = document.getElementById("bill-subtotal").parentNode;
    subtotalRow.parentNode.insertBefore(discountRow, subtotalRow.nextSibling);
  }
  
  if (appliedDiscount > 0) {
    discountRow.style.display = "flex";
    discountRow.innerHTML = `<span>Discovery Discount</span><span>- Rs. ${appliedDiscount}</span>`;
  } else {
    discountRow.style.display = "none";
  }

  document.getElementById("bill-grand-total").textContent = `Rs. ${grandTotal}`;
  document.getElementById("checkout-btn-price").textContent = `Rs. ${grandTotal} →`;

  // Disable proceed button if cart is empty
  const btn = document.querySelector(".btn-checkout-proceed");
  if (totalItemsPrice === 0) {
    btn.disabled = true;
    btn.style.opacity = 0.5;
    btn.style.pointerEvents = "none";
  } else {
    btn.disabled = false;
    btn.style.opacity = 1;
    btn.style.pointerEvents = "auto";
  }

  // Populate dynamic Co-Pilot trigger widget
  renderCoPilotTriggerArea();
}

function applyDiscoveryCoupon() {
  couponApplied = true;
  updatePhoneCartUI();
}

function renderSubscriptionSampler() {
  const container = document.getElementById("sim-subscription-sampler");
  if (!container) return;
  
  if (cartItems.length === 0) {
    container.innerHTML = "";
    return;
  }

  // Sort samples so the B2B sample matching the current persona's category is placed at the front
  const conf = PERSONA_CONFIGS[currentPersona];
  const targetCategory = conf ? conf.nudgeProduct.category : "";
  const sortedSamples = [...SPONSORED_SAMPLES].sort((a, b) => {
    const aMatch = (a.category === targetCategory) ? 1 : 0;
    const bMatch = (b.category === targetCategory) ? 1 : 0;
    return bMatch - aMatch;
  });
  
  container.innerHTML = `
    <div class="subscription-sampler-box">
      <div class="subscription-sampler-header">
        <div class="subscription-sampler-title">🎁 Claim Free Sample <span style="font-size:9px; color:#27c93f; background:rgba(39,201,63,0.15); padding:1px 4px; border-radius:4px; margin-left:4px;">✓ 57% Live Choice</span></div>
        <div class="subscription-sampler-subtitle">Discovery Pass</div>
      </div>
      <div class="sampler-items-scroll">
        ${sortedSamples.map(sample => {
          const isClaimedThis = claimedSampleId === sample.id;
          const isAnyClaimed = claimedSampleId !== null;
          const cardClass = `subscription-sample-card ${isClaimedThis ? 'claimed' : ''}`;
          
          return `
            <div class="${cardClass}" onclick="claimSubscriptionSample('${sample.id}')" style="opacity:${(isAnyClaimed && !isClaimedThis) ? '0.4' : '1'}; pointer-events:${isAnyClaimed ? 'none' : 'auto'};">
              <span class="sampler-badge-sponsored">B2B</span>
              <div class="sampler-prod-emoji">${sample.emoji}</div>
              <div class="sampler-prod-name">${sample.name}</div>
              <div class="sampler-prod-size">${sample.qtyText}</div>
              <div class="sampler-prod-price">Rs. 0</div>
              <button class="sampler-claim-btn" style="pointer-events:none;">${isClaimedThis ? 'Added' : 'Claim'}</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function claimSubscriptionSample(sampleId) {
  if (claimedSampleId !== null) return;
  
  const sampleObj = SPONSORED_SAMPLES.find(s => s.id === sampleId);
  if (!sampleObj) return;
  
  claimedSampleId = sampleId;
  
  // Add to cartItems
  cartItems.push({
    id: sampleObj.id,
    name: `[Sample] ${sampleObj.name}`,
    price: 0,
    qtyText: sampleObj.qtyText,
    emoji: sampleObj.emoji,
    category: sampleObj.category,
    count: 1,
    isSample: true
  });
  
  updatePhoneCartUI();
}

function renderQuestBoard() {
  const container = document.getElementById("sim-quest-board");
  if (!container) return;
  
  if (cartItems.length === 0) {
    container.innerHTML = "";
    return;
  }
  
  const hasGroceries = cartItems.some(i => i.category === 'Groceries');
  const hasSnacks = cartItems.some(i => i.category === 'Snacks');
  const hasBeauty = cartItems.some(i => i.category === 'Beauty & Grooming');
  const hasPets = cartItems.some(i => i.category === 'Pet Supplies');
  const hasUtility = cartItems.some(i => i.category === 'Electronics' || i.category === 'Household Essentials');
  
  const activeCount = [hasGroceries, hasSnacks, hasBeauty, hasPets, hasUtility].filter(Boolean).length;
  
  container.innerHTML = `
    <div class="quest-board-box">
      <div class="quest-board-header">
        <div class="quest-board-title">🏆 Category Streak Board <span style="font-size:9px; color:#27c93f; background:rgba(39,201,63,0.15); padding:1px 4px; border-radius:4px; margin-left:4px;">✓ 86% Live Choice</span></div>
        <div class="quest-board-streak">Streak: ${activeCount}/5</div>
      </div>
      <div class="quest-stickers-row">
        <div class="quest-sticker-item ${hasGroceries ? 'active' : ''}">
          <span class="sticker-icon">🥛</span>
          <div class="sticker-label">Pantry</div>
        </div>
        <div class="quest-sticker-item ${hasSnacks ? 'active' : ''}">
          <span class="sticker-icon">🍿</span>
          <div class="sticker-label">Snacks</div>
        </div>
        <div class="quest-sticker-item ${hasBeauty ? 'active' : ''}">
          <span class="sticker-icon">💄</span>
          <div class="sticker-label">Beauty</div>
        </div>
        <div class="quest-sticker-item ${hasPets ? 'active' : ''}">
          <span class="sticker-icon">🐾</span>
          <div class="sticker-label">Pets</div>
        </div>
        <div class="quest-sticker-item ${hasUtility ? 'active' : ''}">
          <span class="sticker-icon">🔌</span>
          <div class="sticker-label">Utility</div>
        </div>
      </div>
      <div class="quest-benefit-note">
        ${activeCount === 5 
          ? '🎉 <strong>Master Quest Achieved!</strong> 2x Grocery Points unlocked for next month!' 
          : `Add ${5 - activeCount} more domain(s) to unlock <strong>2x Grocery Points</strong> next month!`
        }
      </div>
    </div>
  `;
}

function renderCoPilotTriggerArea() {
  const area = document.getElementById("sim-copilot-trigger-area");
  if (!area) return;
  
  if (cartItems.length === 0) {
    area.innerHTML = "";
    return;
  }
  
  let icon = "⚡";
  let title = "";
  let desc = "";
  let actionText = "";
  let clickAction = "";
  
  if (currentPersona === 'pet') {
    icon = "🐾";
    title = "PetCare Profile Active";
    desc = "Luna (Cat, 2yo) nutrition matching available.";
    actionText = "Open Profile";
    clickAction = "triggerCoPilotScan('pet')";
  } else if (currentPersona === 'beauty') {
    icon = "💄";
    title = "SkinMatch AI Active";
    desc = "Scan skin tone undertone to match cosmetic shades.";
    actionText = "Scan Now";
    clickAction = "triggerCoPilotScan('beauty')";
  } else if (currentPersona === 'electronics') {
    icon = "🔌";
    title = "DeviceLink Active";
    desc = "Auto-detect mobile model for compatible chargers.";
    actionText = "Auto Detect";
    clickAction = "triggerCoPilotScan('electronics')";
  } else if (currentPersona === 'household') {
    icon = "🧹";
    title = "Household Combo Match";
    desc = "Price match your groceries to bulk supermarket savings.";
    actionText = "Price Match";
    clickAction = "triggerCoPilotScan('household')";
  }
  
  area.innerHTML = `
    <div class="copilot-trigger-card" onclick="${clickAction}">
      <span class="copilot-trigger-icon">${icon}</span>
      <div class="copilot-trigger-info">
        <div class="copilot-trigger-title">${title}</div>
        <div class="copilot-trigger-desc">${desc}</div>
      </div>
      <span class="copilot-trigger-action">${actionText}</span>
    </div>
  `;
}

function triggerCoPilotScan(type) {
  if (type === 'beauty') {
    // Show camera scanner screen on the phone
    document.getElementById("sim-screen-cart").classList.remove("active");
    document.getElementById("sim-screen-camera").classList.add("active");
    
    // Simulate scan steps
    const label = document.getElementById("camera-status-label");
    label.textContent = "Opening front camera...";
    
    setTimeout(() => {
      label.textContent = "Analyzing skin tone undertones (30%)...";
    }, 700);
    
    setTimeout(() => {
      label.textContent = "Detecting skin color profile (70%)...";
    }, 1400);
    
    setTimeout(() => {
      label.textContent = "Undertone found: Warm Golden! Matching lipsticks...";
    }, 2100);
    
    setTimeout(() => {
      // Return to cart screen
      document.getElementById("sim-screen-camera").classList.remove("active");
      document.getElementById("sim-screen-cart").classList.add("active");
      
      // Trigger the nudge sheet automatically!
      triggerCheckoutNudge();
    }, 2800);
    
  } else {
    // For other types, simulate loading feedback on the trigger action button
    const triggerCard = document.querySelector(".copilot-trigger-card");
    if (triggerCard) {
      const actionBtn = triggerCard.querySelector(".copilot-trigger-action");
      if (actionBtn) {
        actionBtn.textContent = "Loading...";
        actionBtn.style.background = "var(--color-zepto-orange)";
        
        setTimeout(() => {
          triggerCheckoutNudge();
          actionBtn.textContent = type === 'electronics' ? "Auto Detect" : (type === 'pet' ? "Open Profile" : "Price Match");
          actionBtn.style.background = "var(--color-zepto-purple)";
        }, 900);
      }
    }
  }
}

function cancelCameraScan() {
  document.getElementById("sim-screen-camera").classList.remove("active");
  document.getElementById("sim-screen-cart").classList.add("active");
}

// Trigger checkout nudge modal overlay
function triggerCheckoutNudge() {
  // If the user already interacted with the checkout nudge, proceed directly to success screen
  if (nudgeTriggered) {
    proceedToCheckoutSuccess();
    return;
  }

  const conf = PERSONA_CONFIGS[currentPersona];
  
  // Update suggestion card
  document.getElementById("nudge-text-intro").textContent = conf.nudgeIntro;
  document.getElementById("nudge-prod-discount").textContent = conf.nudgeProduct.discount;
  document.getElementById("nudge-prod-img").textContent = conf.nudgeProduct.emoji;
  document.getElementById("nudge-prod-name").textContent = conf.nudgeProduct.name;
  document.getElementById("nudge-prod-qty").textContent = conf.nudgeProduct.qty;
  document.getElementById("nudge-prod-price-cur").textContent = `Rs. ${conf.nudgeProduct.price}`;
  document.getElementById("nudge-prod-price-mrp").textContent = `Rs. ${conf.nudgeProduct.mrp}`;
  document.getElementById("nudge-add-price").textContent = `+ Rs. ${conf.nudgeProduct.price}`;

  // Trust badges
  document.getElementById("nudge-badge-trust").textContent = conf.nudgeProduct.badgeTrust;
  document.getElementById("nudge-badge-return").textContent = conf.nudgeProduct.badgeReturn;

  // Open overlay modal
  const overlay = document.getElementById("ai-nudge-modal");
  overlay.classList.add("active");
}

let nudgeTriggered = false;

function setPersona(personaKey) {
  currentPersona = personaKey;
  claimedSampleId = null;
  couponApplied = false;
  nudgeTriggered = false; // Reset checkout nudge state

  // Update active pill button style
  document.querySelectorAll(".radio-pill-group button").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`persona-${personaKey}`).classList.add("active");

  const conf = PERSONA_CONFIGS[personaKey];
  
  // Set cart contents
  cartItems = conf.defaultCart.map(itemId => {
    return { ...STAPLE_PRODUCTS[itemId], count: 1 };
  });

  // Update side toggles panel
  renderCartToggles();

  // Update Phone simulation
  updatePhoneCartUI();

  // Reset overlays
  closeNudgeOverlay();
}

function closeNudgeOverlay() {
  const overlay = document.getElementById("ai-nudge-modal");
  overlay.classList.remove("active");
}

function openDarkStoreAudit() {
  const modal = document.getElementById("dark-store-audit-modal");
  if (modal) modal.classList.add("active");
}

function closeDarkStoreAudit() {
  const modal = document.getElementById("dark-store-audit-modal");
  if (modal) modal.classList.remove("active");
}

function acceptNudgeProduct() {
  const conf = PERSONA_CONFIGS[currentPersona];
  const prod = conf.nudgeProduct;
  
  // Add recommendation to cart items list with its actual category
  cartItems.push({
    id: "nudge_item",
    name: prod.name,
    price: prod.price,
    qtyText: prod.qty,
    emoji: prod.emoji,
    category: prod.category,
    count: 1
  });

  nudgeTriggered = true; // Mark nudge as accepted
  closeNudgeOverlay();
  updatePhoneCartUI();
}

function declineNudgeProduct() {
  nudgeTriggered = true; // Mark nudge as dismissed
  closeNudgeOverlay();
  proceedToCheckoutSuccess();
}

function proceedToCheckoutSuccess() {
  // Hide Cart layout, show success screen
  document.getElementById("sim-screen-cart").classList.remove("active");
  document.getElementById("sim-screen-success").classList.add("active");

  // Render items in success screen
  const successList = document.getElementById("success-items-list");
  successList.innerHTML = "";
  
  cartItems.forEach(item => {
    const row = document.createElement("div");
    row.className = "summary-item-row";
    row.innerHTML = `<span>${item.emoji} ${item.name} (x${item.count})</span> <span>Rs. ${item.price}</span>`;
    successList.appendChild(row);
  });
}

function resetPrototypeToCart() {
  document.getElementById("sim-screen-success").classList.remove("active");
  document.getElementById("sim-screen-cart").classList.add("active");
  
  // Reset the persona parameters back
  setPersona(currentPersona);
}

// 6. Tab 4: Pitch Deck functions
function renderSlideDeck() {
  // Populate Slide Thumbnails strip
  const strip = document.getElementById("slide-thumbnails-list");
  if (!strip) return;
  strip.innerHTML = "";

  slidesData.forEach((slide, index) => {
    const thumb = document.createElement("div");
    thumb.className = `slide-thumbnail ${index === currentSlideIndex ? "active" : ""}`;
    thumb.id = `slide-thumb-${index}`;
    thumb.onclick = () => selectSlide(index);
    thumb.innerHTML = `Slide ${slide.slide_number}<br><small>${slide.step_name || 'Step ' + slide.slide_number}</small>`;
    strip.appendChild(thumb);
  });

  selectSlide(currentSlideIndex);
}

function renderSlideCustomContent(slide) {
  if (slide.slide_number === 1) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:12px; border-radius:8px;">
          <h4 style="color:var(--color-zepto-yellow); font-size:11px; margin-bottom:6px;">📋 THE BRIEF</h4>
          <p style="font-size:10px; color:#e2d9f3;">${slide.brief}</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:12px; border-radius:8px;">
          <h4 style="color:var(--color-zepto-orange); font-size:11px; margin-bottom:6px;">⚡ ZEPTO SCALE VS COLLAPSE</h4>
          <ul style="font-size:10px; color:#e2d9f3; padding-left:14px; line-height:1.5;">
            ${slide.scale_vs_collapse ? slide.scale_vs_collapse.map(item => `<li>${item}</li>`).join('') : ''}
          </ul>
        </div>
      </div>
      <div style="margin-top:10px; background:rgba(130,36,227,0.15); border:1px solid rgba(130,36,227,0.4); padding:10px; border-radius:8px;">
        <div style="font-size:11px; font-weight:700; color:#fff;">⚠️ The Paradox</div>
        <p style="font-size:10px; color:#e2d9f3; margin-top:2px;">${slide.the_paradox}</p>
      </div>
    `;
  } else if (slide.slide_number === 2) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:12px; border-radius:8px;">
          <h4 style="color:var(--color-zepto-yellow); font-size:11px; margin-bottom:6px;">⭐ WHAT ECOSYSTEM HAS SOLVED</h4>
          <ul style="font-size:10px; color:#e2d9f3; list-style:none; padding:0; line-height:1.6;">
            ${slide.blind_spot_solved ? slide.blind_spot_solved.map(item => `<li>${item.status} - <strong>${item.layer}</strong></li>`).join('') : ''}
          </ul>
        </div>
        <div style="background:rgba(255,95,86,0.1); border:1px solid rgba(255,95,86,0.3); padding:12px; border-radius:8px;">
          <h4 style="color:var(--color-danger); font-size:11px; margin-bottom:6px;">❌ WHAT NOBODY HAS SOLVED</h4>
          <ul style="font-size:10px; color:#e2d9f3; list-style:none; padding:0; line-height:1.6;">
            ${slide.blind_spot_unsolved ? slide.blind_spot_unsolved.map(item => `<li>${item.status} - <strong>${item.layer}</strong></li>`).join('') : ''}
          </ul>
        </div>
      </div>
      <div style="margin-top:10px; background:rgba(0,0,0,0.4); border:1px solid var(--color-zepto-yellow); padding:10px; border-radius:8px; text-align:center;">
        <div style="font-size:10px; color:var(--color-zepto-yellow); font-weight:700;">★ CORE THESIS WE TESTED</div>
        <p style="font-size:10px; color:#fff; margin-top:2px;">${slide.core_thesis}</p>
      </div>
    `;
  } else if (slide.slide_number === 3) {
    return `
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-bottom:10px;">
        ${slide.survey_stats ? slide.survey_stats.map(st => `
          <div style="background:rgba(130,36,227,0.15); border:1px solid rgba(130,36,227,0.3); padding:8px; border-radius:6px; text-align:center;">
            <div style="font-size:16px; font-weight:800; color:var(--color-zepto-yellow);">${st.stat}</div>
            <div style="font-size:8px; color:var(--text-muted); margin-top:2px;">${st.label}</div>
          </div>
        `).join('') : ''}
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
        <h4 style="color:#fff; font-size:10px; margin-bottom:4px;">🗣️ User Voices from Research</h4>
        ${slide.quotes ? slide.quotes.map(q => `<p style="font-size:9px; color:#e2d9f3; font-style:italic; margin-bottom:4px;">${q}</p>`).join('') : ''}
      </div>
    `;
  } else if (slide.slide_number === 4) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
          <h4 style="color:var(--color-zepto-yellow); font-size:10px; margin-bottom:4px;">📊 Behavioral Segmentation (2x2 Matrix)</h4>
          <ul style="font-size:9px; color:#e2d9f3; padding-left:12px; line-height:1.4;">
            ${slide.matrix ? slide.matrix.map(m => `<li><strong>${m.type}:</strong> ${m.desc}</li>`).join('') : ''}
          </ul>
        </div>
        <div style="background:rgba(130,36,227,0.1); border:1px solid rgba(130,36,227,0.3); padding:10px; border-radius:8px;">
          <h4 style="color:#fff; font-size:10px; margin-bottom:4px;">👤 Target Persona: Neha (Skincare Fan)</h4>
          <p style="font-size:9px; color:#e2d9f3;"><strong>JTBD:</strong> ${slide.persona_1 ? slide.persona_1.jtbd : ''}</p>
          <p style="font-size:9px; color:var(--color-zepto-yellow); margin-top:4px; font-style:italic;">${slide.persona_1 ? slide.persona_1.quote : ''}</p>
        </div>
      </div>
    `;
  } else if (slide.slide_number === 5) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px; text-align:center;">
          <h4 style="color:var(--color-zepto-yellow); font-size:10px; margin-bottom:6px;">📈 TAM / SAM / SOM Opportunity</h4>
          <div style="font-size:10px; color:#fff; line-height:1.6;">
            <div><strong>TAM:</strong> ${slide.tam_sam_som ? slide.tam_sam_som.tam : ''}</div>
            <div><strong>SAM:</strong> ${slide.tam_sam_som ? slide.tam_sam_som.sam : ''}</div>
            <div style="color:var(--color-success); font-weight:700;"><strong>SOM:</strong> ${slide.tam_sam_som ? slide.tam_sam_som.som : ''}</div>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
          <h4 style="color:#fff; font-size:10px; margin-bottom:6px;">🎯 Expected Solution Impact</h4>
          ${slide.impact_table ? slide.impact_table.map(imp => `
            <div style="display:flex; justify-content:space-between; font-size:9px; border-bottom:1px solid rgba(255,255,255,0.05); padding:2px 0;">
              <span>${imp.lever}:</span>
              <span style="color:var(--color-success); font-weight:700;">${imp.impact}</span>
            </div>
          `).join('') : ''}
        </div>
      </div>
    `;
  } else if (slide.slide_number === 6) {
    return `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
        <h4 style="color:var(--color-zepto-yellow); font-size:11px; margin-bottom:6px;">🏆 Three Horizons & RICE Scoring Matrix</h4>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${slide.horizons ? slide.horizons.map(h => `
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:6px; font-size:9px;">
              <div>
                <strong style="color:#fff;">${h.name}</strong> - <span>${h.concept}</span>
              </div>
              <div style="background:var(--color-zepto-purple); color:#fff; padding:2px 6px; border-radius:4px; font-weight:700;">RICE: ${h.rice}</div>
            </div>
          `).join('') : ''}
        </div>
      </div>
    `;
  } else if (slide.slide_number === 7) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        ${slide.steps ? slide.steps.map(st => `
          <div style="background:rgba(130,36,227,0.1); border:1px solid rgba(130,36,227,0.3); padding:8px; border-radius:6px;">
            <div style="font-size:10px; font-weight:700; color:var(--color-zepto-yellow);">${st.num}</div>
            <div style="font-size:10px; font-weight:700; color:#fff; margin:2px 0;">${st.title}</div>
            <div style="font-size:8px; color:var(--text-muted);">${st.desc}</div>
          </div>
        `).join('') : ''}
      </div>
    `;
  } else if (slide.slide_number === 8) {
    return `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
        <h4 style="color:var(--color-zepto-yellow); font-size:11px; margin-bottom:6px;">⚙ System Architecture (4 Core Layers)</h4>
        ${slide.architecture_layers ? slide.architecture_layers.map(l => `
          <div style="margin-bottom:6px; font-size:9px;">
            <strong style="color:#fff;">${l.layer}:</strong> <span style="color:var(--text-muted);">${l.tech}</span>
          </div>
        `).join('') : ''}
      </div>
    `;
  } else if (slide.slide_number === 9) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px; text-align:center;">
          <h4 style="color:var(--color-zepto-yellow); font-size:10px; margin-bottom:4px;">⭐ NORTH STAR METRIC (MCER)</h4>
          <p style="font-size:8px; color:var(--text-muted);">${slide.north_star}</p>
          <div style="display:flex; justify-content:space-around; margin-top:8px;">
            ${slide.targets ? slide.targets.map(t => `
              <div style="text-align:center;">
                <div style="font-size:12px; font-weight:700; color:var(--color-success);">${t.val}</div>
                <div style="font-size:7px; color:var(--text-muted);">${t.period}</div>
              </div>
            `).join('') : ''}
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
          <h4 style="color:var(--color-danger); font-size:10px; margin-bottom:4px;">🛡️ GUARDRAIL METRICS</h4>
          <ul style="font-size:8px; color:#e2d9f3; padding-left:10px; line-height:1.4;">
            ${slide.guardrails ? slide.guardrails.map(g => `<li>${g}</li>`).join('') : ''}
          </ul>
        </div>
      </div>
    `;
  } else if (slide.slide_number === 10) {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
          <h4 style="color:var(--color-zepto-yellow); font-size:10px; margin-bottom:4px;">🚀 3-PHASE ROLLOUT ROADMAP</h4>
          <ul style="font-size:8px; color:#e2d9f3; padding-left:10px; line-height:1.4;">
            ${slide.rollout ? slide.rollout.map(r => `<li>${r}</li>`).join('') : ''}
          </ul>
        </div>
        <div style="background:rgba(255,95,86,0.1); border:1px solid rgba(255,95,86,0.3); padding:10px; border-radius:8px;">
          <h4 style="color:var(--color-danger); font-size:10px; margin-bottom:4px;">⚠️ RISKS &amp; MITIGATIONS</h4>
          ${slide.risks ? slide.risks.map(rk => `
            <div style="font-size:8px; margin-bottom:4px;">
              <strong style="color:#fff;">${rk.risk}:</strong> <span style="color:var(--color-success);">${rk.mitigation}</span>
            </div>
          `).join('') : ''}
        </div>
      </div>
    `;
  }

  // Fallback bullet point renderer
  return `
    <ul style="font-size:11px; color:#e2d9f3; padding-left:16px; line-height:1.6;">
      ${slide.content ? slide.content.map(b => `<li>${b}</li>`).join('') : ''}
    </ul>
  `;
}

function selectSlide(index) {
  currentSlideIndex = index;

  // Thumbnails toggle
  document.querySelectorAll(".slide-thumbnail").forEach(el => el.classList.remove("active"));
  const activeThumb = document.getElementById(`slide-thumb-${index}`);
  if (activeThumb) activeThumb.classList.add("active");

  const slide = slidesData[index];
  if (!slide) return;

  const canvas = document.getElementById("slide-canvas-box");
  if (!canvas) return;

  document.getElementById("current-slide-num").textContent = slide.slide_number;

  const stepsList = ["Context", "Agent's Market", "Research", "Insights", "Problem Canvas", "Ideation", "MVP", "Journey", "Metrics", "Risks + GTM"];

  // Build top tagline banner, body cards, and bottom progress bar
  canvas.innerHTML = `
    <!-- Top High-Impact Tagline Banner -->
    <div style="background:linear-gradient(90deg, #ff5252, #8224e3); padding:8px 16px; border-radius:8px 8px 0 0; display:flex; justify-content:space-between; align-items:center; color:#fff; font-weight:700; font-size:13px; font-family:var(--font-display); text-shadow:0 1px 2px rgba(0,0,0,0.5);">
      <span>${slide.tagline || slide.title}</span>
      <span style="font-size:10px; background:rgba(0,0,0,0.3); padding:2px 8px; border-radius:10px; text-transform:uppercase; letter-spacing:0.05em;">Slide ${slide.slide_number} / 10</span>
    </div>

    <!-- Main Slide Body Layout -->
    <div class="slide-layout-content" style="padding:16px; flex:1; display:flex; flex-direction:column; gap:8px; overflow-y:auto;">
      <h2 style="font-size:16px; color:#fff; font-family:var(--font-display); line-height:1.2;">${slide.title}</h2>
      <h3 style="font-size:11px; color:var(--color-zepto-yellow); font-weight:500;">${slide.subtitle}</h3>

      <!-- Slide Custom Content Renderers -->
      <div class="slide-custom-body" style="flex:1; margin-top:4px;">
        ${renderSlideCustomContent(slide)}
      </div>
    </div>

    <!-- Bottom 10-Step Progress Navigation Bar -->
    <div style="display:flex; background:rgba(0,0,0,0.4); border-top:1px solid rgba(255,255,255,0.08); padding:6px 12px; justify-content:space-between; align-items:center; border-radius:0 0 8px 8px;">
      <div style="display:flex; width:100%; justify-content:space-between; gap:2px;">
        ${stepsList.map((st, i) => {
          const isActive = (i + 1) === slide.slide_number;
          return `
            <div onclick="selectSlide(${i})" style="flex:1; text-align:center; padding:4px 2px; font-size:8px; font-weight:${isActive ? '700' : '500'}; color:${isActive ? '#000' : 'var(--text-muted)'}; background:${isActive ? 'var(--color-zepto-yellow)' : 'rgba(255,255,255,0.03)'}; border-radius:4px; cursor:pointer; transition:var(--transition-smooth); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${st}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Soft slide scale entrance animation
  canvas.style.transform = "scale(0.98)";
  canvas.style.opacity = "0.9";
  setTimeout(() => {
    canvas.style.transform = "scale(1)";
    canvas.style.opacity = "1";
  }, 100);
}

function changeSlide(direction) {
  let targetIndex = currentSlideIndex + direction;
  if (targetIndex >= 0 && targetIndex < slidesData.length) {
    selectSlide(targetIndex);
  }
}

// Exporter of slide contents
function exportDeckJSON() {
  const jsonStr = JSON.stringify(slidesData, null, 2);
  navigator.clipboard.writeText(jsonStr)
    .then(() => {
      alert("Success! Slide deck text content copied to clipboard as JSON. You can paste it directly into Figma, Canva, or PowerPoint.");
    })
    .catch(err => {
      console.error("Could not copy deck content: ", err);
    });
}

function copyGoogleFormScript() {
  const fullScript = `/**
 * Zepto Growth PM - Stealth / Masked Primary Research Google Form Generator Script
 * 
 * INSTRUCTIONS:
 * 1. Open https://script.google.com/ (or Google Drive -> New -> Google Apps Script).
 * 2. Paste THIS ENTIRE SCRIPT.
 * 3. Click "Save" and click "Run".
 * 4. Check the Execution Log at the bottom for your live Stealth Google Form URL!
 */

function createZeptoPrimaryResearchForm() {
  var form = FormApp.create("Quick-Commerce Shopping Habits & Consumer Preference Survey");
  
  form.setDescription("Hi there! We are conducting a 90-second research study on online shopping habits and delivery preferences across quick-commerce apps. Your responses are completely anonymous.");

  // Automatically create a linked Google Sheet for real-time response storage
  var ss = SpreadsheetApp.create("Stealth QC Survey Responses (Spreadsheet)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  
  // Section 1: Baseline Usage
  var q1 = form.addMultipleChoiceItem();
  q1.setTitle("1. How frequently do you use 10-minute delivery apps (Zepto, Blinkit, Instamart)?")
    .setChoiceValues(["Daily/Alternate days (4+ orders/wk)", "1-2 times/week", "2-3 times/month", "Rarely/Emergency only"])
    .setRequired(true);

  var q2 = form.addCheckboxItem();
  q2.setTitle("2. Which product categories do you CURRENTLY order on 10-minute apps?")
    .setChoiceValues(["Daily Dairy, Bakery & Eggs", "Fresh Fruits & Veggies", "Snacks & Beverages", "Beauty & Skincare", "Pet Supplies", "Electronics & Cables", "Baby Care & Diapers", "Household Cleaning"])
    .setRequired(true);

  var q3 = form.addMultipleChoiceItem();
  q3.setTitle("3. Where do you usually buy PLANNED non-grocery items?")
    .setChoiceValues(["Specialized Apps (Nykaa, FirstCry, Supertails)", "General E-Commerce (Amazon, Flipkart)", "Physical Supermarkets (DMart, Reliance)", "10-Minute Quick-Commerce Apps"])
    .setRequired(true);

  // Section 2: Frictions (Masked)
  form.addPageBreakItem().setTitle("Section 2: Non-Grocery Purchase Frictions");
  var q4 = form.addCheckboxItem();
  q4.setTitle("4. What stops you from buying non-grocery items on 10-minute apps?")
    .setChoiceValues([
      "Buying behavior mismatch (Buy bulk monthly from DMart/Amazon for lower prices)",
      "Quality & expiry concerns (Uncertainty about dark store storage conditions)",
      "Packaging & delivery guilt (Ordering single small items in plastic bags feels wasteful)",
      "App interface overload (Checkout screen has too many fees/ads)",
      "Category awareness (Don't think of quick-commerce when needing non-groceries)",
      "Return/Refund uncertainty (Worry about hassle if item is damaged or shade wrong)"
    ])
    .setRequired(true);

  // Section 3: Stealth / Masked Concept Validation (IP-Protected)
  form.addPageBreakItem().setTitle("Section 3: Delivery Incentives & Trial Preferences");
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle("5. Trial Incentive: What would MOST encourage you to try a new skincare, pet, or household brand on a 10-minute app?")
    .setChoiceValues([
      "Receiving a FREE mini trial sample included inside your regular grocery delivery bag",
      "A 20% discount coupon on the full-sized item",
      "Reading verified customer reviews and rating badges",
      "Free 10-minute delivery guarantee"
    ])
    .setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle("6. Loyalty Structure: Which loyalty reward structure would motivate you to shop MORE across different categories?")
    .setChoiceValues([
      "Earning bigger discounts on daily essentials (Milk/Bread) by trying different categories each month",
      "A flat 1% cashback on total monthly spend",
      "Free delivery coupons on orders above Rs. 199",
      "Exclusive access to flash sales"
    ])
    .setRequired(true);

  var q7 = form.addScaleItem();
  q7.setTitle("7. Guarantee Assurance: If a 10-minute app guaranteed an instant 15-minute rider doorstep replacement or shade-match refund for non-returnables, how much would this increase your willingness to buy?")
    .setBounds(1, 5).setLabels("1 - No Impact", "5 - Massive Increase").setRequired(true);

  var q8 = form.addMultipleChoiceItem();
  q8.setTitle("8. Discovery Discount: What type of discount is most likely to make you try a category you have NEVER bought on the app before?")
    .setChoiceValues([
      "A flat Rs. 100 off voucher restricted to first-time category trials",
      "A 10% discount across the entire shopping cart",
      "Buy 1 Get 1 Free on select items",
      "Zero handling fee on your next 3 orders"
    ])
    .setRequired(true);

  var q9 = form.addMultipleChoiceItem();
  q9.setTitle("9. Membership Perks: If your delivery app offered a monthly membership tier, which perk would you value MOST?")
    .setChoiceValues([
      "1 Free curated brand product sample delivered in your grocery bag every month",
      "Unlimited free delivery on orders above Rs. 99",
      "Priority rider assignment during peak rain/rush hours",
      "Double reward points on daily grocery purchases"
    ])
    .setRequired(true);

  // Section 4: Ranking
  var q10 = form.addGridItem();
  q10.setTitle("10. Incentive Ranking: Please RANK the following 4 incentives in order of value to YOU:")
    .setRows([
      "Free brand sample included in grocery bag",
      "Category exploration unlocking cheaper daily groceries",
      "15-Minute doorstep item replacement guarantee",
      "Rs. 100 voucher for trying new product categories"
    ])
    .setColumns(["Rank 1 (Most Valuable)", "Rank 2 (High Value)", "Rank 3 (Moderate Value)", "Rank 4 (Least Valuable)"])
    .setRequired(true);

  Logger.log("Form Edit URL: " + form.getEditUrl());
  Logger.log("Form Published URL: " + form.getPublishedUrl());
}`;

  navigator.clipboard.writeText(fullScript)
    .then(() => {
      alert("Success! 1-Click Stealth Google Apps Script copied to clipboard!\n\nInstructions:\n1. Open script.google.com\n2. Paste code\n3. Click 'Run'!");
    })
    .catch(err => {
      console.error("Could not copy script: ", err);
    });
}

function generateFallbackReviews() {
  const fallback = [];
  const sources = [
    "Play Store", "App Store", "Reddit (r/bangalore)", "Reddit (r/india)",
    "Twitter", "Quora", "MouthShut", "LinkedIn", "ProductHunt", "Trustpilot"
  ];
  const barriers = [
    "Planned vs. Emergency Mismatch", "Trust in Quality", "Checkout Impulse Fatigue", 
    "Ecological Guilt", "Lack of Awareness", "Operational & Delivery Issues"
  ];
  const categories = [
    "Groceries", "Beauty & Grooming", "Pet Supplies", "Electronics", "Baby Care", "Household Essentials", "Snacks"
  ];
  const contents = [
    "I order milk, bread, and curd every single morning on Zepto. But I am terrified of buying skincare products like face serums.",
    "Zepto is my default app for daily fresh vegetables. But laundry detergent and garbage bags are planned bulk buys from DMart.",
    "I rely on Zepto for daily essentials. But checkout screen clutter and rain fees make me close notifications immediately.",
    "Ordering a single charger cable or lipstick that comes in a massive plastic wrap makes me feel ecological guilt.",
    "I had no idea Zepto started selling cat food and pet supplies. I never browse because of severe banner blindness.",
    "The order got delayed by 50 minutes and the rider was extremely rude. Helpbot refused refund."
  ];

  for (let i = 1; i <= 2000; i++) {
    const src = sources[i % sources.length];
    const bar = barriers[i % barriers.length];
    const cat = categories[i % categories.length];
    const text = contents[i % contents.length];
    const sent = bar === "Operational & Delivery Issues" ? "Negative" : (i % 3 === 0 ? "Neutral" : "Negative");
    
    fallback.push({
      id: i,
      source: src,
      username: `user_${1000 + i}`,
      rating: (i % 5) + 1,
      sentiment: sent,
      category_mentioned: cat,
      barrier_identified: bar,
      content: `${text} (Ref ID: #${i})`
    });
  }
  return fallback;
}

// ==========================================
// DYNAMIC GUIDED PM TOUR CORE ENGINE
// ==========================================
let tourStep = 0;
const tourSteps = [
  {
    tab: "engine",
    content: "<strong>Step 1: Welcome to Zepto Discovery Portal!</strong><br><br>We are exploring a Growth PM framework built to solve quick-commerce cross-category discovery stagnation. Let's start in <strong>Tab 1 (AI PM Discovery Engine)</strong> where we ingest 2,000 multi-platform social customer reviews."
  },
  {
    tab: "engine",
    content: "<strong>Step 2: Deep Feedback Extraction & PM Questions</strong><br><br>Look down at the <strong>8 Core PM Questions Matrix</strong>. Tapping these cards reveals how we answered fundamental product discovery queries using data-backed customer review patterns."
  },
  {
    tab: "research",
    content: "<strong>Step 3: Primary Research & Cohort Survey Validation</strong><br><br>Let's switch to the <strong>User Research Hub</strong>. Here we validate our AI insights against 5 user interview transcripts and our expanded <strong>N=22 live audience survey results scorecard</strong>!"
  },
  {
    tab: "prototype",
    content: "<strong>Step 4: Zepto AI MVP Simulator</strong><br><br>Let's switch to the interactive **Zepto AI MVP Simulator** tab. Here is a fully interactive mockup of a Zepto customer shopping cart."
  },
  {
    tab: "prototype",
    content: "<strong>Step 5: Dynamic B2B Sampling & Streak Quests</strong><br><br>Try: 1. Claiming a Free Sample (it prioritizes the relevant category automatically), 2. Tapping the AI suggestion scanner (e.g. <strong>SkinMatch AI</strong>), and 3. Watching the <strong>Category Streak Board</strong> stickers light up in gold to unlock 2x Grocery Points!"
  },
  {
    tab: "prototype",
    content: "<strong>Step 6: Model B Live Dark-Store Audit & CCTV</strong><br><br>Clicking 'Proceed to Payment' triggers the checkout recommendation drawer. Click **View Storage Audit Log ➔** to see the <strong>Model B IoT storage telemetry and live CCTV camera snapshot</strong> ($15/mo production cost)!"
  },
  {
    tab: "deck",
    content: "<strong>Step 7: Deep-Dive Slide Pitch Deck (Final Step)</strong><br><br>Let's open the <strong>10-Slide Pitch Deck</strong>. Use this tab to read our complete PM proposal detailing target metrics, subscription economics, and pilot rollouts. Enjoy exploring!"
  }
];

function startGuidedTour() {
  tourStep = 0;
  document.getElementById("guided-tour-overlay").style.display = "block";
  renderTourStep();
}

function endGuidedTour() {
  document.getElementById("guided-tour-overlay").style.display = "none";
}

function renderTourStep() {
  const step = tourSteps[tourStep];
  if (!step) return;
  
  // Switch to correct tab automatically
  switchTab(step.tab);
  
  // Populate content
  document.getElementById("tour-step-content").innerHTML = step.content;
  document.getElementById("tour-step-indicator").textContent = `Step ${tourStep + 1} of ${tourSteps.length}`;
  
  // Update button states
  document.getElementById("tour-prev-btn").style.opacity = tourStep === 0 ? "0.4" : "1";
  document.getElementById("tour-prev-btn").style.pointerEvents = tourStep === 0 ? "none" : "auto";
  
  const nextBtn = document.getElementById("tour-next-btn");
  if (tourStep === tourSteps.length - 1) {
    nextBtn.textContent = "Finish ✓";
    nextBtn.style.background = "var(--color-success)";
  } else {
    nextBtn.textContent = "Next ➔";
    nextBtn.style.background = "var(--color-zepto-purple)";
  }
}

function nextTourStep() {
  if (tourStep === tourSteps.length - 1) {
    endGuidedTour();
  } else {
    tourStep++;
    renderTourStep();
  }
}

function prevTourStep() {
  if (tourStep > 0) {
    tourStep--;
    renderTourStep();
  }
}
