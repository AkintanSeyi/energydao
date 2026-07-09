import React, { useState } from 'react';

const NewsPage = () => {
 const energyNews = [
    



{
 id: 6,
 category: "Nuclear",
 title: "DOE Launches Nuclear Lifecycle Innovation Campus Initiative",
 date: "Jan 18, 2026",
 summary: "States were invited to propose locations for advanced nuclear fuel-cycle facilities.",
      link: "https://dwee.nebraska.gov/news-events/press-releases/nebraska-submits-information-us-doe-nuclear-lifecycle-innovation-campus-consideration",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 7,
 category: "Investment",
 title: "Uranium Prices Surge Above $80 Per Pound",
 date: "Jan 18, 2026",
 summary: "Growing nuclear demand and supply concerns pushed uranium markets higher.",
     link: "https://www.ans.org/news/2025-11-10/article-7532/uranium-market-prices-reflect-higher-demand/",
      image: "https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 8,
 category: "Policy",
 title: "US Expands Nuclear Fuel Supply Chain Program",
 date: "Jan 28, 2026",
 summary: "Federal agencies announced new measures to reduce dependence on foreign nuclear fuel sources.",
   link: "https://www.urenco.com/news/uusa/2026/urenco-usa-plans-significant-expansion-of-us-uranium-enrichment-capacity",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    

},
{
 id: 9,
 category: "LNG",
 title: "US LNG Exports Begin 2026 Strong",
 date: "Feb 02, 2026",
 summary: "Export terminals reported robust shipments to Europe and Asia.",
   link: "https://www.forbes.com/sites/ianpalmer/2026/05/27/exports-of-us-liquefied-natural-gas-ten-year-revolution-has-risks/",
      image: "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 10,
 category: "Renewables",
 title: "Wind Generation Sets February Output Record",
 date: "Feb 05, 2026",
 summary: "Strong wind conditions boosted renewable generation across multiple states.",
    link: "https://energyefficiency.ie/blog/new-record-set-for-wind-power-generation/",
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    

},
{
 id: 11,
 category: "Grid",
 title: "Grid Operators Prepare for AI-Driven Power Demand",
 date: "Feb 09, 2026",
 summary: "Utilities announced infrastructure investments to support expanding data centers.",
  link: "https://www.eenews.net/articles/ai-could-make-power-grid-more-efficient-if-utilities-can-persuade-regulators/",
      image: "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 12,
 category: "Oil",
 title: "Permian Basin Investment Reaches New High",
 date: "Feb 12, 2026",
 summary: "Major producers increased spending on drilling and production projects.",
   link: "https://www.energyindepth.org/permian-basin-stands-out-in-a-record-year-for-u-s-energy-companies/",
      image: "https://plus.unsplash.com/premium_photo-1678167657579-a0986938f0c8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 13,
 category: "Solar",
 title: "Arizona Announces New Solar Manufacturing Hub",
 date: "Feb 15, 2026",
 summary: "The facility aims to strengthen domestic clean-energy supply chains.",
    link: "https://www.canarymedia.com/articles/clean-energy-manufacturing/us-solar-manufacturing-in-2026",
      image: "https://images.unsplash.com/photo-1729954924953-ff957b3e9edc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 14,
 category: "Hydrogen",
 title: "Green Hydrogen Projects Receive Federal Support",
 date: "Feb 18, 2026",
 summary: "New funding programs targeted industrial-scale hydrogen deployment.",
     link: "https://www.bundeswirtschaftsministerium.de/Redaktion/EN/Hydrogen/Dossiers/funding-advice.html",
      image: "https://images.unsplash.com/photo-1631304480499-b45f5e4aa882?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 15,
 category: "Nuclear",
 title: "SMR Developers Advance Licensing Applications",
 date: "Feb 22, 2026",
 summary: "Several advanced reactor companies reached key regulatory milestones.",
      link: "https://www.ans.org/news/2026-05-20/article-8057/blykalla-submits-application-for-sixsmr-site-in-sweden/",
      image: "https://images.unsplash.com/photo-1634680722242-f8f5704ed3ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 17,
 category: "Oil & Gas",
 title: "Gulf Coast Refiners Expand Capacity",
 date: "Mar 02, 2026",
 summary: "Refining companies announced upgrades to improve fuel production.",
      link: "https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/012126-us-gulf-coast-refiners-seen-benefiting-from-increased-use-of-heavy-venezuelan-crude",
      image: "https://plus.unsplash.com/premium_photo-1709316145478-c31161a5c913?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},


{
 id: 20,
 category: "Nuclear",
 title: "Advanced Reactor Fuel Supply Initiative Expanded",
 date: "Mar 12, 2026",
 summary: "DOE announced additional support for HALEU production.",
      link: "https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/052726-us-doe-negotiating-with-reactor-developers-to-use-surplus-plutonium-for-fuel",
      image: "https://plus.unsplash.com/premium_photo-1682148233099-e9de9e59b081?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 21,
 category: "Solar",
 title: "US Solar Installations Maintain Growth Trend",
 date: "Mar 15, 2026",
 summary: "Developers connected new projects across multiple regions.",
       link: "https://www.ironridge.com/2026/01/01/ready-for-feoc-compliance-we-have-you-covered/?gad_source=1&gad_campaignid=23462009918",
      image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{   
 id: 24,
 category: "Policy",
 title: "Energy Security Programs Receive Expanded Funding",
 date: "Mar 25, 2026",
 summary: "Federal initiatives focused on domestic energy resilience.",
      link: "https://www.catf.us/resource/federal-funding-programs-clean-energy-deployment/",
      image: "https://images.unsplash.com/photo-1659290542154-82c97bdab2fd?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 25,
 category: "Renewables",
 title: "Wind Turbine Manufacturing Expands in Midwest",
 date: "Apr 01, 2026",
 summary: "New facilities were announced to meet growing turbine demand.",
     link: "https://thebusinessdownload.com/nordex-brings-manufacturing-jobs-back-to-iowa/",
      image: "https://images.unsplash.com/photo-1546883648-8c5648200abc?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 26,
 category: "Grid",
 title: "Regional Utilities Launch Reliability Investments",
 date: "Apr 04, 2026",
 summary: "Companies announced upgrades to critical transmission networks.",
   link: "https://www.spglobal.com/market-intelligence/en/news-insights/research/as-ira-drives-renewables-investment-attention-turns-to-transmission-upgrades",
      image: "https://images.unsplash.com/photo-1622103146053-f37729bc9f62?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 27,
 category: "Solar",
 title: "Utility Solar Pipeline Exceeds Expectations",
 date: "Apr 08, 2026",
 summary: "Developers reported strong construction activity nationwide.",
   link: "http://pv-tech.org/eia-us-add-record-43-4gw-new-utility-scale-solar-pv-capacity-2026/",
      image: "https://images.unsplash.com/photo-1563630381190-77c336ea545a?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 28,
 category: "Nuclear",
 title: "Industry Consortium Targets Fuel Cycle Expansion",
 date: "Apr 12, 2026",
 summary: "More than 90 companies joined efforts to strengthen nuclear supply chains.",
  link: "https://world-nuclear.org/news-and-media/association-news/world-nuclear-fuel-cycle-2026-ten-highlights-from-a-sector-ready-to-act",
      image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 29,
 category: "Oil",
 title: "US Refining Margins Improve in Spring Quarter",
 date: "Apr 15, 2026",
 summary: "Refiners benefited from stable crude supplies and fuel demand.",
   link: "https://www.reuters.com/business/energy/us-refiners-first-quarter-profits-expected-jump-war-lifts-fuel-margins-2026-04-27/",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 30,
 category: "Hydrogen",
 title: "Industrial Hydrogen Projects Move Toward Construction",
 date: "Apr 18, 2026",
 summary: "Several large-scale facilities entered final planning stages.",
    link: "https://globalhydrogenhub.com/hydrogen-project-movement-signals-continued-progress-across-the-global-pipeline.html",
      image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 32,
 category: "Grid",
 title: "Battery Storage Capacity Doubles from Prior Year",
 date: "Apr 24, 2026",
 summary: "Energy storage growth continued to reshape grid operations.",
     link: "https://www.iea.org/commentaries/battery-storage-is-scaling-up-and-taking-on-a-larger-system-role",
      image: "https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 34,
 category: "Nuclear",
 title: "US Nuclear Renaissance Gains Momentum",
 date: "May 05, 2026",
 summary: "DOE highlighted progress across fuel, reactor, and supply chain programs.",
      link: "https://www.morganstanley.com/insights/articles/nuclear-energy-investment-renaissance-2050",
      image: "https://images.unsplash.com/photo-1511454493857-0a29f2c023c7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 36,
 category: "Oil & Gas",
 title: "Pipeline Operators Announce Expansion Projects",
 date: "May 10, 2026",
 summary: "Companies moved ahead with new transportation infrastructure.",
       link: "https://www.cruxinvestor.com/posts/middle-east-export-expansion-drives-infrastructure-demand-as-iraq-lifts-pipeline-capacity-to-770-000-bpd",
      image: "https://images.unsplash.com/photo-1507823690283-48b0929e727b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 37,
 category: "Grid",
 title: "Data Center Growth Reshapes Electricity Forecasts",
 date: "May 12, 2026",
 summary: "Utilities revised long-term demand projections upward.",
     link: "https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/101425-data-center-grid-power-demand-to-rise-22-in-2025-nearly-triple-by-2030",
      image: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 39,
 category: "Nuclear",
 title: "Advanced Reactor Developers Secure Additional Funding",
 date: "May 18, 2026",
 summary: "Private investment continued flowing into next-generation nuclear technologies.",
   link: "https://arpa-e.energy.gov/news-and-events/news-and-insights/department-energy-announces-50-million-accelerate-development-transuranic-fuels-advanced-reactors",
      image: "https://plus.unsplash.com/premium_photo-1661898205432-d648667b9c76?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},


{
 id: 42,
 category: "Infrastructure",
 title: "Transmission Upgrades Support Renewable Growth",
 date: "May 25, 2026",
 summary: "Utilities expanded grid connections for new generation assets.",
    link: "https://rmi.org/resources/fast-efficient-solutions-to-meet-electricity-demand-growth/",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 43,
 category: "Natural Gas",
 title: "EIA Projects Record US Natural Gas Output",
 date: "Jun 09, 2026",
 summary: "Federal forecasts show production and demand reaching record highs in 2026.",
  link: "https://www.reuters.com/business/energy/us-natgas-output-demand-hit-record-highs-2026-eia-says-2026-06-09/",
      image: "https://plus.unsplash.com/premium_photo-1664299488927-4352e3d2a71e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 45,
 category: "Climate",
 title: "States Reassess Energy Transition Policies",
 date: "Jun 04, 2026",
 summary: "Several states reviewed energy affordability and reliability goals.",
   link: "https://www.cbpp.org/research/climate-change/states-should-support-an-energy-system-that-is-affordable-safe-and-reliable",
      image: "https://plus.unsplash.com/premium_photo-1682148777981-02e7c4bd0138?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},

{
 id: 47,
 category: "Nuclear",
 title: "US-South Korea Hold Nuclear Deterrence Talks",
 date: "Jun 11, 2026",
 summary: "Officials discussed nuclear readiness and regional security cooperation.",
    link: "https://www.reuters.com/world/asia-pacific/us-south-korea-hold-nuclear-deterrence-talks-north-korea-expands-arms-push-2026-06-11/",
      image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},
{
 id: 48,
 category: "Grid",
 title: "Utilities Accelerate Summer Reliability Planning",
 date: "Jun 11, 2026",
 summary: "Grid operators prepare for peak seasonal electricity demand.",
     link: "https://www.aesindiana.com/press-release/aes-indiana-prepared-deliver-reliable-affordable-energy-during-summer-2026-demands",
      image: "https://images.unsplash.com/photo-1696197302705-7c2cc6a7e8ac?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
},



  
    {
      id: 1,
      category: "Geopolitics",
      title: "Project Orinoco: $100B Capital Call for Venezuela Oil",
      date: "Jan 12, 2026",
      summary: "Secretary Marco Rubio confirms a $100 billion investment timeline to rebuild Venezuela's deteriorated oil infrastructure using US-led private capital.",
      link: "https://www.webpronews.com/exxon-ceo-deems-venezuela-uninvestable-amid-trumps-100b-oil-call/",
      image: "https://images.unsplash.com/photo-1678532685208-54acdd41187d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
    {
      id: 3,
      category: "Infrastructure",
      title: "50 Million Barrel Yield: The Venezuela Deal",
      date: "Jan 11, 2026",
      summary: "President Trump secures 50 million barrels of crude from Venezuelan reserves to bolster the US Strategic Petroleum Reserve (SPR).",
      link: "https://www.bbc.com/news/articles/c4grxzxjjd8o",
      image: "https://images.unsplash.com/photo-1558617867-659c667b6809?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      category: "Policy",
      title: "US-Kazakhstan SMR Deployment Initiative",
      date: "Jan 06, 2026",
      summary: "State Dept launches a feasibility study with Sargent & Lundy to deploy Small Modular Reactors (SMRs) in Almaty, Kazakhstan.",
      link: "https://qazinform.com/news/foreign-media-on-kazakhstan-kazakhstan-aims-to-train-one-million-people-in-ai-skills-by-2030-us-kazakhstan-launch-initiatives-to-facilitate-smr-deployment-bd4f69",
      image: "https://images.unsplash.com/photo-1604269949318-10589797d025?q=80&w=1344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      category: "Investment",
      title: "Holtec Wins State Dept SMR Simulator Contract",
      date: "Dec 15, 2025",
      summary: "Florida-based Holtec International selected to build nuclear training hubs in Central Asia under the FIRST program.",
      link: "https://world-nuclear-news.org/articles/two-smr-projects-selected-for-us-federal-funding",
      image: "https://images.unsplash.com/photo-1444427169197-de497742b62d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // --- DEPARTMENT OF ENERGY (DOE) & NUCLEAR ---
    {
      id: 6,
      category: "Nuclear",
      title: "DOE Awards $2.7B to Restore Uranium Enrichment",
      date: "Jan 05, 2026",
      summary: "The DOE awards $900M each to American Centrifuge, General Matter, and Orano to end reliance on Russian nuclear fuel.",
      link: "https://www.reuters.com/business/energy/us-awards-27-billion-worth-orders-boost-uranium-enrichment-2026-01-05/",
      image: "https://images.unsplash.com/photo-1653933387093-7cf0cfce94a0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      category: "Nuclear",
      title: "Pennsylvania Nuclear Restart: $1B Loan Closing",
      date: "Nov 20, 2025",
      summary: "DOE closes a $1 billion loan to accelerate the restart of a mothballed nuclear plant, adding 850MW of baseload power.",
      link: "https://www.jepic-usa.org/digests/2025/11/21/usa-doe-closes-1b-loan-to-restart-three-mile-island-nuclear-unit",
      image: "https://plus.unsplash.com/premium_photo-1725408046951-b630889efdfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      category: "Tech",
      title: "Genesis Mission: AI Meets Energy Data",
      date: "Nov 24, 2025",
      summary: "Trump signs EO 14363, launching the Genesis Mission to combine DOE supercomputing with private-sector AI for oil discovery.",
      link: "https://fedscoop.com/energy-department-genesis-mission-ai-partner/",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800"
    },
    {
      id: 9,
      category: "Grid",
      title: "Speed to Power Initiative Launched",
      date: "Sep 18, 2025",
      summary: "DOE accelerates multi-gigawatt grid projects specifically to power new AI data centers across the Sun Belt.",
      link: "https://www.tdworld.com/policy/news/55317690/doe-launches-speed-to-power-initiative-to-accelerate-grid-infrastructure-development",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800"
    },
    {
      id: 10,
      category: "Critical Minerals",
      title: "$355M for Mine of the Future Projects",
      date: "Nov 14, 2025",
      summary: "Strategic funding announced for real-world testing of next-generation mining tech to reduce China dependence.",
      link: "https://www.metaltechnews.com/story/2025/11/19/mining-tech/doe-invests-355m-in-critical-mining-tech/2552.html",
      image: "https://images.unsplash.com/photo-1653202293335-92f6ace9943f?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // --- OIL, GAS & RESTRUCTURING ---
   
    {
      id: 12,
      category: "Infrastructure",
      title: "Bryan Mound SPR Site Refill Underway",
      date: "Oct 21, 2025",
      summary: "DOE begins acquisition of 1 million barrels of crude for the Strategic Petroleum Reserve's Texas facility.",
      link: "https://rbnenergy.com/daily-posts/analyst-insight/doe-buys-25-mmbbl-refill-bryan-mound-spr-site-q1-2025-seeks-more",
      image: "https://images.unsplash.com/photo-1534072700421-3100bd80c44d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 13,
      category: "Coal",
      title: "Coal Reinvigoration Fund: $625M Investment",
      date: "Sep 29, 2025",
      summary: "New federal initiative aims to boost energy production in Appalachia through advanced coal-to-liquid technologies.",
      link: "https://jpt.spe.org/us-energy-department-announces-625m-to-boost-coal",
      image: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=800"
    },
    {
      id: 14,
      category: "Policy",
      title: "Deregulatory Surge: 47 Regulations Cut",
      date: "Dec 19, 2025",
      summary: "DOE completes largest deregulatory effort in history, estimating $11 billion in consumer energy savings.",
      link: "https://primarynewssource.org/sourcedocument/energy-department-slashes-47-burdensome-and-costly-regulations-delivering-first-milestone-in-americas-biggest-deregulatory-effort/",
      image: "https://plus.unsplash.com/premium_photo-1670595460341-196d85bde567?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 15,
      category: "Geothermal",
      title: "FY26 Budget Focuses on Baseload Geothermal",
      date: "Jan 08, 2026",
      summary: "House passes appropriations bill increasing geothermal R&D by 40% to secure the Western electric grid.",
      link: "https://www.geothermal.org/taxonomy/term/62",
      image: "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // --- PRIVATE EQUITY & CORPORATE DEALS ---
    {
      id: 16,
      category: "Investment",
      title: "Quantum Capital Group Closes $10B Fund",
      date: "Nov 01, 2025",
      summary: "Major energy PE firm Quantum closes massive fund targeting Permian Basin oil and gas infrastructure.",
      link: "https://finance.yahoo.com/news/quantum-raises-10b-oil-gas-142400669.html",
      image: "https://plus.unsplash.com/premium_photo-1682375613172-d15b6be9c9fb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 17,
      category: "M&A",
      title: "LandGate Acquires Topos for Data Center Siting",
      date: "Dec 18, 2025",
      summary: "LandGate solidifies authority in data center energy assessment with acquisition of clean energy due-diligence firm.",
      link: "https://www.prnewswire.com/news-releases/landgate-corp-acquires-topos-accelerating-consolidation-of-energy-and-infrastructure-development-data-302645004.html",
      image: "https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 18,
      category: "M&A",
      title: "Syntholene Energy Acquires GK Resources",
      date: "Dec 10, 2025",
      summary: "Reverse merger signals a return to growth for mid-cap oil producers in the Bakken Formation.",
      link: "https://www.marketscreener.com/news/syntholene-energy-corp-completed-the-acquisition-of-gk-resources-ltd-tsxv-nikl-h-in-a-reverse-mer-ce7d50dada8ffe20",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    },
    {
      id: 19,
      category: "M&A",
      title: "Alexium Acquires Microtek for $2.17M",
      date: "Dec 15, 2025",
      summary: "Consolidation in the phase-change materials sector driven by industrial energy efficiency demands.",
      link: "https://www.alexiuminternational.com/acquisition-of-microtek-labs/",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
    },
    {
      id: 20,
      category: "Infrastructure",
      title: "EnCap Investments Raises $6.4B for Upstream",
      date: "Oct 15, 2025",
      summary: "Private capital continues to flow into traditional energy as institutional returns outpace the broader market.",
      link: "https://www.dakota.com/fundraising-news/encap-raises-6.4b-for-12th-upstream-oil-and-gas-buyout-fund",
      image: "https://plus.unsplash.com/premium_photo-1676673189320-76524a64684a?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // --- RESTRUCTURING & GRID SECURITY ---
    {
      id: 21,
      category: "Grid Security",
      title: "House Bans SPR Crude Sales to China",
      date: "Jan 08, 2026",
      summary: "New legislation prohibits the Department of Energy from selling emergency oil reserves to the Chinese Communist Party.",
      link: "https://www.reuters.com/business/energy/us-house-passes-bill-banning-exports-reserve-oil-china-2023-01-12/",
      image: "https://images.unsplash.com/photo-1610201530821-46afa71c5b93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 22,
      category: "Policy",
      title: "Withdrawal from UN Climate Bureaucracy",
      date: "Jan 01, 2026",
      summary: "President Trump officially withdraws the US from the UNFCCC to prioritize domestic industrial energy policy.",
      link: "https://www.nytimes.com/2026/01/07/climate/trump-un-climate-treaty.html",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
    },
    {
      id: 23,
      category: "Nuclear",
      title: "Nano Nuclear Signs MOU with Ameresco",
      date: "Jan 12, 2026",
      summary: "Partnership explores deployment of microreactors at US federal sites and industrial data centers.",
      link: "https://www.gulfoilandgas.com/webpro1/main/mainnews.asp?id=1099398",
      image: "https://plus.unsplash.com/premium_photo-1725408046951-b630889efdfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
    {
      id: 25,
      category: "Tech",
      title: "HALEU Uranium Pilot Projects Launch",
      date: "Sep 10, 2025",
      summary: "DOE selects four companies to strengthen the domestic supply chain for high-assay low-enriched uranium.",
      link: "https://www.powermag.com/doe-allocates-second-round-of-haleu-fuel-to-three-u-s-nuclear-companies/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    },

    // --- STRATEGY & LOGISTICS ---
    {
      id: 26,
      category: "Strategy",
      title: "The 'America First' Energy Budget Passes",
      date: "Jan 09, 2026",
      summary: "FY26 budget includes $58B for nuclear stockpile modernization and industrial energy growth.",
      link: "https://www.atlanticcouncil.org/in-depth-research-reports/issue-brief/the-america-first-energy-plan-renewing-the-confidence-of-american-energy-producers/",
      image: "https://plus.unsplash.com/premium_photo-1682144383927-045b23413c15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 27,
      category: "Fossil Fuel",
      title: "Global Gas Demand: Gulf Coast LNG Boom",
      date: "Dec 20, 2025",
      summary: "Exports from the Gulf Coast hit record highs as US natural gas takes center stage in European markets.",
      link: "https://news.constructconnect.com/gulf-coast-lng-boom-brings-billion-dollar-construction-surge",
      image: "https://images.unsplash.com/photo-1641072301083-88979c179142?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 28,
      category: "Investment",
      title: "Family Offices Replace Pension Funds in Oil",
      date: "Nov 12, 2025",
      summary: "Private wealth managers become the primary LPs for energy funds, seeking high yields in traditional production.",
      link: "https://www.theguardian.com/environment/2021/oct/26/abp-pension-fund-to-stop-investing-in-fossil-fuels-amid-climate-fears",
      image: "https://plus.unsplash.com/premium_photo-1661722534401-18d918a7a898?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 29,
      category: "Grid Security",
      title: "AI-Driven Cybersecurity for the Grid",
      date: "Jan 04, 2026",
      summary: "New funding focused on protecting the electric grid from state-sponsored cyberattacks via advanced AI protocols.",
      link: "https://www.frontiersin.org/research-topics/65746/enhancing-smart-grid-security-with-ai-driven-cyber-resilience",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
    },
    {
      id: 30,
      category: "Policy",
      title: "FERC Approves Massive Pipeline Expansion",
      date: "Dec 28, 2025",
      summary: "Strategic midstream projects fast-tracked to connect Permian natural gas to export terminals.",
      link: "https://www.reuters.com/business/energy/ferc-approves-tc-energys-us-mexico-north-baja-natgas-pipe-expansion-2023-05-30/",
      image: "https://images.unsplash.com/photo-1714901423290-45ab23464dbc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 31,
      category: "Geopolitics",
      title: "US-Guyana Strategic Energy Alliance",
      date: "Jan 10, 2026",
      summary: "Diplomatic mission secures offshore drilling rights for American majors in South American waters.",
      link: "https://www.jointsdgfund.org/article/united-nations-guyana-launches-just-energy-transition-seed-funding-initiative-advance-low",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800"
    },
    {
      id: 32,
      category: "Nuclear",
      title: "Vogtle Unit 4 Full Capacity Operations",
      date: "Dec 12, 2025",
      summary: "Georgia's new nuclear units reach 100% output, providing clean baseload for the entire region.",
      link: "https://www.georgiapower.com/news-hub/press-releases/vogtle-unit-4-enters-commercial-operation.html",
      image: "https://images.unsplash.com/photo-1639313521811-fdfb1c040ddb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 33,
      category: "Tech",
      title: "Modular Refinery Tech in Appalachia",
      date: "Nov 05, 2025",
      summary: "Private capital deploys mobile refining units to process shale gas at the source.",
      link: "https://www.kunm.org/2012-01-12/projects-promise-of-jobs-has-appalachia-seeing-stars",
      image: "https://images.unsplash.com/photo-1741151749309-8bb17563c701?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 34,
      category: "Infrastructure",
      title: "Rare Earth Refinery Break Ground in Texas",
      date: "Jan 03, 2026",
      summary: "A new domestic facility begins construction to process rare earth elements from industrial byproducts.",
      link: "https://www.reuters.com/world/us/usa-rare-earth-speeds-up-texas-project-eyes-2028-start-2025-12-10/",
      image: "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 35,
      category: "Policy",
      title: "National Energy Emergency Declaration",
      date: "Jan 01, 2026",
      summary: "President Trump declares energy emergency to bypass local opposition to critical interstate pipelines.",
      link: "https://www.cbcfinc.org/wp-content/uploads/2025/03/Declaring-a-National-Energy-Emergency-Fact-Sheet.pdf",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800"
    },
    {
      id: 36,
      category: "Nuclear",
      title: "X-energy and Dow Chemical SMR Project",
      date: "Dec 15, 2025",
      summary: "First industrial nuclear site in Seadrift, Texas, enters the construction permit phase.",
      link: "https://corporate.dow.com/en-us/news/press-releases/dow-x-energy-collaborate-on-smr-nuclear.html",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 37,
      category: "Geothermal",
      title: "Colorado Basin Geothermal Pilot",
      date: "Nov 20, 2025",
      summary: "Strategic investment in closed-loop geothermal energy to replace aging coal capacity in the Rockies.",
      link: "https://www.steamboatpilot.com/news/geothermal-technologies-co2-sequestration-highlighted-for-potential-in-northwestern-colorado/",
      image: "https://plus.unsplash.com/premium_photo-1661963749842-8c69a3f99987?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 38,
      category: "Investment",
      title: "Pearl Energy Investments Closes $1B Fund",
      date: "Feb 15, 2025",
      summary: "Targeted capital for small-to-mid cap oil companies needing rescue and growth capital.",
      link: "https://www.themiddlemarket.com/latest-news/peal-energy-closes-oversubscribed-fund-iv-at-999-9m",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800"
    },
    {
      id: 39,
      category: "Infrastructure",
      title: "Port of Houston Waterway Modernization",
      date: "Jan 08, 2026",
      summary: "Full funding allocated for deepening ports to accommodate the new fleet of US LNG supertankers.",
      link: "https://www.porttechnology.org/news/port-houston-secures-214-million-for-channel-upgrades/",
      image: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=800"
    },
   
    {
      id: 41,
      category: "Policy",
      title: "End of Wind Farm Leasing Mandate",
      date: "Dec 15, 2025",
      summary: "Interior Dept shifts focus from offshore wind to offshore oil and gas leasing programs.",
      link: "https://edition.cnn.com/2025/12/22/climate/trump-offshore-wind-suspension-virginia",
      image: "https://images.unsplash.com/photo-1561978879-84fa00184ef2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 42,
      category: "Geopolitics",
      title: "Rubio Secures Energy Trade Pact with India",
      date: "Jan 05, 2026",
      summary: "State Dept facilitates long-term LNG supply contracts between American producers and Indian utilities.",
      link: "https://www.reuters.com/business/energy/us-india-met-more-talks-this-week-us-chief-diplomat-says-2025-09-23/",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 43,
      category: "Nuclear",
      title: "Illinois Lifts Nuclear Moratorium",
      date: "Jan 09, 2026",
      summary: "State policy shift allows for new large-scale nuclear deployment to support Chicago's growing data sector.",
      link: "https://enerknol.com/illinois-enacts-legislation-to-lower-utility-bills-expand-battery-storage-lift-nuclear-moratorium/",
      image: "https://images.unsplash.com/photo-1626823208620-4643c1884b8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 44,
      category: "Grid",
      title: "Multi-State Geothermal Initiative Launch",
      date: "Jan 07, 2026",
      summary: "Collaborative project between Idaho and Nevada to expand geothermal power for regional mining ops.",
      link: "https://www.geodrillinginternational.com/geothermal/news-articles/4525354/gto-launches-multistate-initiative-expand-geothermal-power",
      image: "https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 45,
      category: "Critical Minerals",
      title: "$134M for Rare Earth Recovery from Coal",
      date: "Dec 01, 2025",
      summary: "DOE funding for projects that extract valuable minerals from existing coal ash deposits.",
      link: "https://parakeetrisk.com/blog/new-doe-funding-initiative-allocates-134-million-to-strengthen-domestic-rare-earth-supply-chains",
      image: "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 46,
      category: "Fossil Fuel",
      title: "Natural Gas Prices Double Long-Term Outlook",
      date: "Jan 12, 2026",
      summary: "Market analysts predict a decade-long bull run for US gas as coal plants are replaced by gas-fired generation.",
      link: "https://naturalgasintel.com/news/banks-lower-26-natural-gas-forecast-modestly-but-long-term-price-confidence-holds/",
      image: "https://plus.unsplash.com/premium_photo-1742496566836-b1e179c18465?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 47,
      category: "Investment",
      title: "Secondary Market for Energy Assets Surges",
      date: "Dec 16, 2025",
      summary: "Private equity firms see record activity in corporate carve-outs of non-core oil assets.",
      link: "https://globalmarkets.cib.bnpparibas/commodity-markets-energy-markets-2025/",
      image: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 48,
      category: "Infrastructure",
      title: "Alaska Willow Project: First Oil Targeted 2027",
      date: "Jan 11, 2026",
      summary: "Expedited infrastructure build-out on Alaska's North Slope receives final federal environmental clearance.",
      link: "https://www.enr.com/articles/57935-alaska-willow-oil-megaproject-gets-developer-final-ok",
      image: "https://images.unsplash.com/photo-1515885267349-1fcef6e00fd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 49,
      category: "Policy",
      title: "Department of Energy Refocuses R&D",
      date: "Jan 08, 2026",
      summary: "DOE cuts 'Clean Energy Demonstration' office to focus funds on 'Applied Energy' and production tech.",
      link: "https://envirodatagov.org/project-2025-department-of-energy-and-related-commissions-annotated/",
      image: "https://images.unsplash.com/photo-1591030321517-b58d3d967c1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 50,
      category: "Geopolitics",
      title: "The Abraham Accords Energy Expansion",
      date: "Dec 22, 2025",
      summary: "Joint US-Middle East investment in natural gas pipelines to secure Mediterranean supply lines.",
      link: "https://nationalinterest.org/blog/energy-world/how-kazakhstans-entry-into-the-abraham-accords-opens-new-energy-pathways",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 11 crypto news for 2025, IDs 51–61
    ,

      {
      id: 51,
      category: "Crypto Policy",
      title: "Trump Signals Full Support for Pro-Crypto Framework",
      date: "Jan 13, 2026",
      summary: "President Trump reiterates support for decentralized finance, Bitcoin, and blockchain innovation as pillars of US economic sovereignty.",
      link: "https://www.pillsburylaw.com/en/news-and-insights/cryptocurrency-digital-assets-trump.html",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800"
    },
{
  id: 51,
  category: "Crypto Adoption",
  title: "Trump Campaign Integrates Crypto Donations",
  date: "Nov 15, 2025",
  summary: "Political fundraising expands to accept Bitcoin and major tokens directly, signaling mainstream campaign adoption.",
  link: "https://www.binance.com/en-NG/square/post/8946986224025",
  image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 52,
  category: "Stablecoin",
  title: "Federal Review OKs Energy-Backed Stablecoin Design",
  date: "Oct 10, 2025",
  summary: "Treasury and Energy Dept consider stablecoins backed by oil and power derivatives for trade settlement.",
  link: "https://www.theblock.co/post/150701/doe-backed-researchers-propose-solution-to-stablecoin-paradox-an-electricity-peg",
  image: "https://images.unsplash.com/photo-1591696331116-87f3a98b469b?q=80&w=800"
},
{
  id: 53,
  category: "Crypto Policy",
  title: "US Lawmakers Propose National Crypto Charter",
  date: "Nov 01, 2025",
  summary: "Bipartisan bill introduced to create a federal banking charter for crypto firms to operate nationally, signaling full federal support.",
  link: "https://subscriber.politicopro.com/article/2026/01/trump-linked-crypto-company-applies-for-federal-banking-charter-00715408",
  image: "https://plus.unsplash.com/premium_photo-1694475191764-09f8c42f7a58?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 54,
  category: "Exchange",
  title: "Major US Exchange Lists $TRUMP Token Pre-Launch",
  date: "Oct 30, 2025",
  summary: "A leading US crypto exchange announces support for $TRUMP ahead of launch with high institutional interest.",
  link: "https://www.reuters.com/sustainability/boards-policy-regulation/crypto-exchanges-rushed-list-trumps-coin-leaving-many-losers-some-big-winners-2025-07-14/",
  image: "https://images.unsplash.com/photo-1664138481334-12626f0e8708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 55,
  category: "DeFi",
  title: "DeFi Lending Hits New ATH Amid US Policy Shift",
  date: "Dec 20, 2025",
  summary: "DeFi credit markets surge as US policy inclines toward innovation-first frameworks and clearer custody laws.",
  link: "https://www.mexc.co/en-NG/news/342419",
  image: "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{


  id: 57,
  category: "Crypto Market",
  title: "Bitcoin Breaks Records as 2025 Closes",
  date: "Dec 31, 2025",
  summary: "Bitcoin surges past prior all-time highs in a strong rally driven by institutional inflows and clearer U.S. policy.",
  link: "https://www.coindesk.com/markets/",
  image: "https://images.unsplash.com/photo-1621501011941-c8ee93618c9a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 58,
  category: "NFTs",
  title: "Energy Sector NFTs for Carbon Credits Launch",
  date: "Dec 12, 2025",
  summary: "Blockchain-based carbon credit NFT marketplace goes live, enabling transparent tracking of emissions reductions.",
  link: "https://www.edie.net/nft-based-carbon-credit-platform-launches-in-isle-of-man/",
  image: "https://plus.unsplash.com/premium_photo-1661346049502-68fe74f3e600?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 59,
  category: "Crypto Adoption",
  title: "Major US City Adopts Crypto Payroll Pilot",
  date: "Sep 22, 2025",
  summary: "Municipal government pilots paying employees with Bitcoin option to diversify compensation.",
  link: "https://www.nytimes.com/2022/01/20/nyregion/eric-adams-bitcoin-cryptocurrency.html",
  image: "https://images.unsplash.com/photo-1540127978-6dd7ccde72ac?q=80&w=800"
},
{
  id: 60,
  category: "Mining Tech",
  title: "Green Crypto Mining with Geothermal Power Piloted",
  date: "Nov 25, 2025",
  summary: "First pilot links geothermal plants to proof-of-work miners to cut emissions and stabilize local power grids.",
  link: "https://www.powermag.com/well-constructed-solution-geothermal-to-power-bitcoin-mining/",
  image: "https://plus.unsplash.com/premium_photo-1740505058305-636db2e8d1fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},


];

  // SORT: Convert date strings to actual Date objects and sort descending
  const sortedNews = energyNews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // newest first
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Slice the sorted array for pagination
  const currentNews = sortedNews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-[#0A3161]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3161] to-transparent z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1518384401463-d3876163c195?auto=format&fit=crop&q=80&w=2000" 
          alt="Energy Intelligence Background" 
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase">
              Operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Updates
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed tracking-wide">
              Live dispatches on the progress of infrastructure investment, policy shifts, and the industrial scaling of domestic power production assets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NEWS CONTENT SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-5xl">
          
          <div className="space-y-20">
            {currentNews.map((news) => (
              <div key={news.id} className="group flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-16">
                <div className="w-full md:w-1/3 relative">
                   <div className="absolute -inset-2 bg-slate-50 rounded-xl -rotate-1 group-hover:rotate-0 transition-transform"></div>
                   <img 
                    src={news.image} 
                    className="relative z-10 h-64 w-full object-cover rounded-lg shadow-lg" 
                    alt={news.title} 
                   />
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <div className="flex items-center gap-4">
                
                  </div>
                  
                  <h2 className="text-3xl font-black text-[#0A3161] tracking-tight uppercase group-hover:text-[#B31942] transition-colors">
                    {news.title}
                  </h2>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {news.summary}
                  </p>

                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pt-4 inline-flex items-center gap-2 text-[#0A3161] font-bold text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-[#B31942] transition-all"
                  >
                    Access Briefing File
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 3. PAGINATION */}
          <div className="mt-16 flex justify-between items-center">
            <button 
              onClick={() => {
                setCurrentPage(prev => Math.max(0, prev - 1));
                window.scrollTo(0, 0); 
              }}
              disabled={currentPage === 0}
              className={`text-sm font-black uppercase tracking-[0.2em] px-6 py-3 border-2 transition-all
                ${currentPage === 0 
                  ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                  : 'border-[#0A3161] text-[#0A3161] hover:bg-[#0A3161] hover:text-white'}`}
            >
              ← Previous Briefing
            </button>

            <button 
              onClick={() => {
                setCurrentPage(prev => prev + 1);
                window.scrollTo(0, 0); 
              }}
              disabled={(currentPage + 1) * itemsPerPage >= sortedNews.length}
              className={`text-sm font-black uppercase tracking-[0.2em] px-6 py-3 border-2 transition-all
                ${(currentPage + 1) * itemsPerPage >= sortedNews.length 
                  ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                  : 'border-[#0A3161] text-[#0A3161] hover:bg-[#0A3161] hover:text-white'}`}
            >
              Next Briefing →
            </button>
          </div>

        </div>
      </section>

      {/* 4. FOOTER PLEDGE */}
      <section className="bg-[#0A3161] py-16 text-center text-white px-6  border-[#B31942]">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#B31942] block mb-4">Official Publication</span>
          <h2 className="text-2xl font-black mb-4 leading-tight uppercase">Revitalizing American Power Assets.</h2>
          <div className="h-px w-24 bg-white/20 mx-auto"></div>
        </div>
      </section>
      
    </div>
  );
};

export default NewsPage;