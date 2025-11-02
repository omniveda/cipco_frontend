import React, { useState, useEffect } from 'react';
import med1 from '../assets/product/otab5.webp';
import med2 from '../assets/product/otab6.webp';
import med3 from '../assets/product/otab7.webp';
import med4 from '../assets/product/otab8.webp';
import med5 from '../assets/product/otab1.webp';
import med6 from '../assets/product/otab2.webp';
import med7 from '../assets/product/otab3.webp';
import medi from '../assets/product/medi.webp';


const Products = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('tablets');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showViewMore, setShowViewMore] = useState(false);

   useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Close menu when switching to desktop
            if (!mobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productData = {
    tablets: [
      {
        id: 1,
        image: med1,
        name: "Cipcor 500 Tablets",
        description: "Advanced antibiotic formulation for effective treatment",
        features: ["Fast-acting", "High bioavailability", "GMP certified"],
        category: "Antibiotics"
      },
      {
        id: 2,
        image: med2,
        name: "Cipcet Tablets",
        description: "Premium antihistamine for allergy relief",
        features: ["Non-drowsy formula", "24-hour relief", "Child-safe"],
        category: "Antihistamines"
      },
      {
        id: 3,
        image: med3,
        name: "Anadol Tablets",
        description: "Powerful analgesic for pain management",
        features: ["Rapid pain relief", "Non-addictive", "Multi-symptom"],
        category: "Analgesics"
      },
      {
        id: 4,
        image: med4,
        name: "Vitiation Tablets",
        description: "Comprehensive vitamin supplement for daily health",
        features: ["All essential vitamins", "Enhanced absorption", "Vegetarian"],
        category: "Supplements"
      },
      {
        id: 5,
        image: med5,
        name: "Dipafen Tablets",
        description: "Pain-relieving medicine",
        features: ["Reduce pain", "Reduce inflammation rheumatoid arthritis", "Reduce inflammation  ankylosing spondylitis"],
        category: "Cardiovascular"
      },
      {
        id: 6,
        image: med6,
        name: "Necipco Tablets",
        description: "Anti-inflammatory and analgesic medication",
        features: ["Anti-inflammatory", "analgesic"],
        category: "Neurological"
      },
      {
        id: 7,
        image: med7,
        name: "Vitavion Forte Tablets",
        description: "In treatment of inflammation involving nerves, irritated or damage nerves, diabetes and drugs induced damage nerves.",
        features: ["Vitamin B1 (Thiamine)", "Vitamin B6 (Pyridoxine)", "Vitamin B12 (Cobalamin)"],
        category: "Neurological"
      },
      {
        id: 8,
        image: medi,
        name: "View more",
        description: "",
        features: [""],
        category: ""
      }
    ],
    liquid: [
      {
        id: 1,
        name: "Albendazole Oral Suspension IP 200 mg/5 ml",
        composition: "Each 5 ml Contains:\nAlbendazole IP                              200 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 2,
        name: "Aluminium, Magnesium and Simethicone oral Suspension IP (Antacid)",
        composition: "Each 5 ml Contains:\nAluminium Hydroxide Gel IP    250 mg\nMagnesium Hydroxide IP          250 mg\nSimethicone IP                                50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 3,
        name: "Ambroxol Hydrochloride Syrup 30 mg/ 5 ml",
        composition: "Each 5 ml contains:\nAmbroxol Hydrochloride IP        30 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 4,
        name: "Cetirizine Syrup IP 5 mg/5 ml",
        composition: "Each 5 ml Contains:\nCetirizine HCl IP                                5 mg\nIn Flavored Syrup Base Q.S.\nColour: Tartrazine"
      },
      {
        id: 5,
        name: "Cetirizine Oral Solution BP 5 mg",
        composition: "Each 5 ml Contains:\nCetirizine Hydrochloride BP          5 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 6,
        name: "Chloroquine Phosphate Oral Suspension IP 50 mg/5 ml",
        composition: "Each 5 ml Contains:\nChloroquine Phosphate IP\nEquivalent to Chloroquine           50 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 7,
        name: "Chloroquine Syrup IP 50 mg/5 ml",
        composition: "Each 5 ml Contains:\nChloroquine Phosphate IP\nEquivalent to Chloroquine           50 mg\nIn Flavored Syrup Base Q.S.\nColour: Ponceau 4R Red"
      },
      {
        id: 8,
        name: "Chlorpheniramine maleate Syrup 2 mg/ 5 ml",
        composition: "Each 5 ml contains:\nChlorpheniramine maleate IP       2 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 9,
        name: "Chlorpromazine Hydrochloride Syrup 25 mg/ 5ml",
        composition: "Each 5 ml contains:\nChlorpromazine Hydrochloride IP\n                                                              25 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 10,
        name: "Co- Trimoxazole Oral Suspension IP",
        composition: "Each 5 ml Contains:\nTrimethoprim IP                             40 mg\nSulphamethoxazole IP                200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 11,
        name: "Co- Trimoxazole Oral Suspension IP",
        composition: "Each 5 ml Contains:\nTrimethoprim IP                             80 mg\nSulphamethoxazole IP                400 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 12,
        name: "Cyproheptadine Syrup IP 2 mg/5 ml",
        composition: "Each 5 ml Contains:\nCyproheptadine HCl IP                    2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 13,
        name: "Chloramphenicol Oral Suspension IP 125 mg/ 5 ml",
        composition: "Each 5 ml Contains:\nChloramphenicol Palmitate IP\nEquivalent to\nChloramphenicol                          125 mg\nIn Flavored Syrup Base                      Q.S.\nColour: Approved Colour Used"
      },
      {
        id: 14,
        name: "Dextromethorphan Hydrobromide and Chlorpheniramine Maleate Syrup",
        composition: "Each 5 ml Contains:\nDextromethorphan\nHydrobromide IP                      10.00 mg\nChlorpheniramine Maleate IP 2.00 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        id: 15,
        name: "Dextromethorphan Hydrobromide, Chlorpheniramine Maleate, Guaiphenesin, and Ammonuim Chloride Syrup",
        composition: "Each 5 ml Contains:\nDextromethorphan\nHydrobromide IP                        5.00 mg\nChlorpheniramine Maleate IP 2.50 mg\nGuaiphenesin IP                        50.00 mg\nAmmonium Chloride IP          60.00 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        id: 16,
        name: "Diphenhydramine HCl, Ammonium Chloride and Sodium Citrate Syrup",
        composition: "Each 5 ml Contains:\nDiphenhydramine HCl IP        14.08 mg\nAmmonium Chloride IP          138.0 mg\nSodium Citrate IP                      57.03 mg\nIn Mentholated Syrup Base Q.S.\nColour: Caramel Black"
      },
      {
        id: 17,
        name: "Diphenhydramine HCl, Ammonium Chloride, Sodium Citrate and Menthol Syrup",
        composition: "Diphenhydramine HCl IP          15.0 mg\nAmmonium Chloride IP          150.0 mg\nSodium Citrate IP                        60.0 mg\nMenthol IP                                      1.0 mg\nIn Flavored Syrup Base Q.S.\nColour: Caramel Black"
      },
      {
        id: 18,
        name: "Disodium Hydrogen Citrate Syrup BP 1.4 gm/5 ml",
        composition: "Each 5 ml Contains:\nDisodium Hydrogen Citrate BP 1.4 gm\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 19,
        name: "Domperidone Suspension IP 1 mg/ml",
        composition: "Each ml Contains:\nDomperidone IP                             1.0 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 20,
        name: "Furazolidone Oral Suspension Suspension IP 25 mg/ 5 ml",
        composition: "Each 5 ml contains:\nFurazolidone  IP                              25 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 21,
        name: "Haloperidol Oral Solution IP 2 mg / 5 ml",
        composition: "Each  ml contains:\nHaloperidol IP                                   2  mg\nAqua's Base Q.S."
      },
      {
        id: 22,
        name: "Ibuprofen Oral Suspension 100 mg/5 ml",
        composition: "Each 5 ml Contains:\nIbuprofen IP                                  100 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 23,
        name: "Lactulose Oral Syrup 10 gm/15 ml",
        composition: "Each 15 ml Contains:\nLactulose IP                                      10 gm\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 24,
        name: "Levocetirizine HCl Syrup 2.50 mg/5 ml",
        composition: "Each 5 ml Contains:\nLevocetirizine HCl IP                  2.50 mg\nIn Flavored Syrup Base Q.S.\nColour: Tartrazine"
      },
      {
        id: 25,
        name: "Levocetirizine HCl and Montelukast Sodium Syrup",
        composition: "Each 5 ml Contains:\nLevocetirizine HCl IP                  2.50 mg\nMontelukast Sodium IP                4.0 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 26,
        name: "Levosalbutamol, Ambroxol Hydrochloride and Guaiphenesin Syrup",
        composition: "Each 5 ml Contains:\nLevosalbutamol Sulphate IP\nEquivalent to Levosalbutamol      1 mg\nAmbroxol Hydrochloride IP  30.00 mg\nGuaiphenesin IP                        50.00 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 27,
        name: "Levocetirizine Dihydrochloride Syrup 2.5 mg/ 5 ml",
        composition: "Each 5 ml Contains:\n(Export Only)\nLevocetirizine Dihydrochloride USP  2.50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour Used"
      },
      {
        id: 28,
        name: "Mebendazole Oral Suspension 100 mg/5 ml",
        composition: "Each 5 ml Contains:\nMebendazole IP                            100 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 29,
        name: "Metronidazole Benzoate Oral Suspension IP 40 mg/ml",
        composition: "Each ml Contains:\nMetronidazole Benzoate IP\nEq. to Metronidazole                      40 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 30,
        name: "Metronidazole Benzoate Oral Suspension IP 50 mg/ml",
        composition: "Each ml Contains:\nMetronidazole Benzoate IP\nEq. to Metronidazole                      50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 31,
        name: "Metronidazole Benzoate Oral Suspension IP 100 mg/ 5 ml",
        composition: "Each 5ml Contains\nMetronidazole Benzoate IP\n Equivalent to Metronidazole   100 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 32,
        name: "Ofloxacin and Metronidazole Benzoate Oral Suspension",
        composition: "Each 5 ml Contains:\nOfloxacin IP                                      50 mg\nMetronidazole Benzoate IP\nEq. to Metronidazole                   100 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 33,
        name: "Ofloxacin Oral Suspension Suspension IP 50 mg/ 5 ml",
        composition: "Each 5 ml contains:\nOfloxacin  IP                                    50  mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 34,
        name: "Ondansetron Syrup 2 mg/ 5 ml",
        composition: "Each 5 ml contains:\nOndansetron IP                                  2 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 35,
        name: "Paracetamol Paediatric Oral Suspension IP 100 mg",
        composition: "Each ml Contains:\nParacetamol IP                              100 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 36,
        name: "Paracetamol Paediatric Syrup IP 125 mg/5 ml",
        composition: "Each 5 ml Contains:\nParacetamol IP                              125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 37,
        name: "Paracetamol Paediatric Oral Suspension IP 125 mg/5 ml",
        composition: "Each 5 ml Contains:\nParacetamol IP                              125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 38,
        name: "Paracetamol Paediatric Oral Suspension IP 150 mg/ml",
        composition: "Each ml Contains:\nParacetamol IP                              150 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 39,
        name: "Paracetamol Paediatric Oral Suspension IP 250 mg/ 5 ml",
        composition: "Each 5 ml Contains:\nParacetamol IP                              250 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 40,
        name: "Paracetamol Oral Suspension BP 250 mg/ 5 ml",
        composition: "Each 5 ml Contains:\n(Export Only)\nParacetamol BP                                250 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour Used"
      },
      {
        id: 41,
        name: "Paracetamol Oral Suspension BP 125 mg / 5 ml",
        composition: "Each 5 ml Contains:\n(Export Only)\nParacetamol BP                             125 mg\nIn Flavored Syrup Base                      Q.S.\nColour: Approved Colour Used"
      },
      {
        id: 42,
        name: "Pheniramine Maleate Syrup 15 mg/ ml",
        composition: "Each ml Contains:\nPheniramine Maleate IP              15 mg\nFlavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 43,
        name: "Promethazine HCl Syrup IP 5 mg/5 ml",
        composition: "Each 5 ml Contains:\nPromethazine HCl IP                        5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 44,
        name: "Salbutamol Syrup IP 2 mg/ 5 ml",
        composition: "Each 5 ml Contains\nSalbutamol Sulphate IP\nEquivalent  to Salbutamol              2 mg\nIn Flavored Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 45,
        name: "Terbutaline Sulphate, Guaiphenesin, Ambroxol Hydrochloride and Menthol Syrup",
        composition: "Each 5 ml Contains:\nTerbutaline Sulphate IP            2.50 mg\nGuaiphenesin IP                     100.00 mg\nAmbroxol Hydrochloride IP  30.00 mg\nMenthol IP                                    2.50 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        id: 46,
        name: "Terbutaline Sulphate, Guaiphenesin, Ambroxol Hydrochloride and Menthol Syrup",
        composition: "Each 5 ml Contains:\nTerbutaline Sulphate IP          1.250 mg\nGuaiphenesin IP                        50.00 mg\nAmbroxol Hydrochloride IP  15.00 mg\nMenthol IP                                  2.500 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        id: 47,
        name: "Zinc Sulphate Oral Solution IP 20 mg/ 5 ml",
        composition: "Each 5 ml Contains:\nZinc Sulphate Monohydrate IP\nEq. to elemental Zinc                     20 mg\nFlavoured Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        id: 48,
        name: "Acyclovir Oral Suspension IP 200 mg/ 5 ml",
        composition: "Each 5 ml contains:\nAcyclovir IP                                    200 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 49,
        name: "Lactulose Solution USP 10 gm/ 15 ml",
        composition: "Each 15 ml Contains:\nLactulose Concentrate Solution USP\nEquivalent to Lactulose                10 gm\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 50,
        name: "Paracetamol Syrup IP 250 mg/ 5ml",
        composition: "Each 5 ml Contains:\nParacetamol IP                              250 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 51,
        name: "Azithromycin Oral Suspension IP 100 mg/ 5 ml",
        composition: "Each 5 ml Contains:\nAzithromycin IP (Dihydrate)\nEquivalent to Azithromycin\nAnhydrous                                      100 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 52,
        name: "Azithromycin Oral Suspension IP 200 mg/ 5 ml",
        composition: "Each 5 ml Contains:\nAzithromycin IP (Dihydrate)\nEquivalent to Azithromycin\nAnhydrous                                      200 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 53,
        name: "Erythromycin Estolate Oral Suspension USP 100 mg",
        composition: "Each 5 ml Contains:\nErythromycin Estolate USP\nEquivalent to Erythromycin     100 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 54,
        name: "Erythromycin Estolate Oral Suspension USP 125 mg",
        composition: "Each 5 ml Contains:\nErythromycin Estolate USP\nEquivalent to Erythromycin     125 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 55,
        name: "Calcium Phosphate, Vitamin D3 and Vitamin B12 Suspension",
        composition: "Each 5 ml Contains:\nCalcium Phosphate IP                 240 mg\n(Equivalent to Calcium 82 mg)\nCholecalciferol (D3) IP                  200 IU\nCyanocobalamine IP (B12)    2.500 mcg\nIn Flavored Syrup Base Q.S.\nColour: Erythrosine Red"
      },
      {
        id: 56,
        name: "Ferrous Ascorbate and Folic Acid Oral Suspension",
        composition: "Each 5 ml Contains:\nFerrous Ascorbate\nEquivalent to Elemental Iron      30 mg\nFolic Acid IP                                 550 mcg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 57,
        name: "Ferrous Ascorbate and Folic Acid Oral Suspension",
        composition: "Each 5 ml Contains:\n(Export Only)\nFerrous Ascorbate\nEquivalent to Elemental Iron      30 mg\nFolic Acid BP                                550 mcg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour Used"
      },
      {
        id: 58,
        name: "Iron and Folic Acid Syrup IP 5 mg",
        composition: "Each 5 ml Contains:\nDried Ferrous Sulphate IP\nEquivalent to Elemental Iron   100 mg\nFolic Acid IP                                    0.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        id: 59,
        name: "Prednisolone Sodium Phosphate Oral Solution BP   5 mg/ 5ml",
        composition: "Each 5 ml Contains:\nPrednisolone Sodium Phosphate BP\nEq. to  Prednisolone                         5 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        id: 60,
        name: "Vitamin A Paediatric Oral Solution IP  100000 IU/ ml",
        composition: "Each ml Contains:\nVitamin A Palmitate IP         100000 IU\nFlavoured Edible Oil Base Q.S."
      },
      {
        id: 61,
        name: "Vitamin B Complex Syrup",
        composition: "Each 5 ml Contains:\n(For Prophylactic Use)\nThiamin HCl IP (B1)                       1.0 mg\nRiboflavine IP (B2)                         1.0 mg\nNiacinamide IP (B3)                    15.0 mg\nPyridoxine HCL IP (B6)                 0.5 mg\nCyanocobalamine IP (B12)    0.500 mcg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 62,
        name: "Vitamin B Complex with D-Panthenol Syrup",
        composition: "Each 5 ml Contains:\n(For Prophylactic Use)\nThiamin HCl IP (B1)                       1.0 mg\nRiboflavine IP (B2)                         1.0 mg\nNiacinamide IP (B3)                    15.0 mg\nPyridoxine HCL IP (B6)                 1.0 mg\nD-Panthenol IP                          1.000 mg\nIn Flavored Syrup Base Q.S.\nApproved Colour Used"
      },
      {
        id: 63,
        name: "Iron, Folic Acid and Vitamin B12 Syrup",
        composition: "Each 15 ml Contains:\n(Napo Fefo-up)\nFerric Ammonium Citrate USP\n(Export Only)\nEquivalent to Elemental Iron      32 mg\nFolic Acid BP                                   0.5 mg\nCyanocobalamin BP                    7.5 mcg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      }
    ]
  };

  const viewMoreData = {
    "IRON AND FOLIC ACID TABLETS": [
      "Iron (333 mg) and Folic Acid (0.5 mg) Tablets IP (Film Coated)",
      "Iron (335 mg) and Folic Acid (0.5 mg) Tablets IP (Enteric Coated)",
      "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Sugar Coated)",
      "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Film Coated)",
      "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Enteric Coated)",
      "Iron (333 mg) and Folic Acid (0.5 mg) Tablets IP (Sugar Coated)"
    ],
    "ANTIMALARIA": [
      "Chloroquine Phosphate Tablets IP 250 mg (Malariaklin Tables)",
      "Pyrimethamine 25 mg and sulphamethaxazole 500 mg Tablets (Sypalfin Tablets)",
      "Pyrimethamine 25 mg and sulphamethaxazole 500 mg (Citakalfin Tablets)",
      "Primaquine phosphate Tablets IP 7.5 mg",
      "Quinine Sulphate Tablets IP 300 mg (Q-Sulpha Tablets)",
      "Artemether (20 mg) & Lumefantrine (120 mg) Dispersible Tablets",
      "Artemether (40 mg) & Lumefantrine (240 mg) Tablets",
      "Artemether (80 mg) & Lumefantrine (480 mg) Tablets",
      "Quinine Sulphate Tablets IP 100 mg",
      "Quinine Sulphate Tablets IP 300 mg"
    ],
    "ANTIEMETIC": [
      "Domperidone Tablets IP 10 mg",
      "Domperidone Tablets IP 20 mg",
      "Cinnarizine Tablets IP 25 mg (C – Zine Tablets)",
      "Cisapride Monohydrate Tablets 10 mg (Cipride Tablets)",
      "Paracetamol 325 mg and Domperidone 20 mg (Dopomol Tablets)",
      "Ondansetron Tablets IP 4 mg",
      "Ondansetron Tablets IP 8 mg (Ontron Tablets)",
      "Metoclopramide Tablets IP 10 mg (Pnorm Tablets)"
    ],
    "ANTIVIRAL": [
      "Acyclovir Tablets IP 400 mg",
      "Acyclovir Tablets IP 800 mg"
    ],
    "ANTACID": [
      "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg & Sodium bicarbonate 50 mg Tablets (Antacid tablets)",
      "Cimetidine Tablets IP 200 mg",
      "Ranitidine Tablets USP 150 Mg (Acioff Tablets)",
      "Ranitidine Tablets USP 300 Mg (Acioff 300 Tablets)",
      "Ranitidine 150 mg & Domperidone 10 mg Tablets (Acioff- DM Tablets)"
    ],
    "ANTISPASMODIC": [
      "Dicyclomine HCl 20 mg & Paracetamol 250 mg(Cipspas Tablets)",
      "Dicyclomin HCl Tablets IP 10 mg",
      "Dicyclomin HCl Tablets IP 20 mg",
      "Diclofenac potassium BP 50 mg & Dicyclomin HCl IP 20 mg Tablets (D Difen Tablets)",
      "Ranitidine150 mg & Dicyclomine 10 mg(Raneidine Tablet)"
    ],
    "ANTIBIOTIC": [
      "Azithromycin Tablets IP 250 mg",
      "Azithromycin Tablets IP 500 mg",
      "Ciprofloxacin Tablets IP 250 mg (Cipnex-250 Tablets)",
      "Ciprofloxacin Tablets IP 500 mg (Cipnex-500 Tablets)",
      "Ciprofloxacin 500 mg & Tinidazole 600 mg (Cipnex-TZ Tablets)",
      "Co-Trimoxazole Tablets IP (PAEDITRIC)[Trimethoprim 20 mg & Sulphamethoxazole 100 mg]",
      "Co-Trimoxazole Tablets IP [Trimethoprim 40 mg & Sulphamethoxazole 200 mg]",
      "Trimethoprim 160 mg & Sulphamethazole 800 mg Tablets IP (Calprim DS Tablets)",
      "Trimethoprim 80 mg & Sulphamethazole 400 mg Tablets IP (Calprim Tablets)",
      "Erythromycin Stearate Tablets IP 250 mg (Ericin 250 Tablets)",
      "Erythromycin Stearate Tablets IP 500 mg(Ericin 500 Tablets)",
      "Metronidazole Tablets IP 200 mg",
      "Metronidazole Tablets IP 400 mg",
      "Cefadroxil Tablets IP 250 mg",
      "Cefadroxil Tablets IP 250 mg",
      "Cefixime Tablets USP 200 mg (Cixime-200 Tablets)",
      "Cefuroxime Axetil Tablet USP 500 mg",
      "Cephalexine Tablets IP 750 mg",
      "Dapsone Tablets IP 100 mg",
      "Dapsone Tablets IP 100 mg (Dsone Tablets)",
      "Gatifloxacin Tablets IP 400 mg (Gaticin Tablets)",
      "Glimepride Tablets USP 1 mg (Gipride Tablets)",
      "Glimepride Tablets USP 2 mg (Gipride 2 Tablets)",
      "Levofloxacin Tablets IP 250 mg",
      "Mycophenolate Mofitil Tablets IP 250 mg(Mycotil-250 Tablets)",
      "Mycophenolate Mofitil Tablets IP 500 mg(Mycotil-500 Tablets)",
      "Nalidixic Acid Tablets IP 250 mg (Nalacid 250 Tablets)",
      "Nalidixic Acid Tablets IP 500 mg (Nalacid 500 Tablets)",
      "Ofloxacin Tablets IP 200 mg",
      "Ofloxacin IP 200 mg & Norfloxacin IP 600 Tablets(Ofnar Tablets)",
      "Ofloxacin IP 500 mg & Norfloxacin IP 200 Tablets (Orfloxa Tablets)",
      "Ofloxacin IP 500 mg & Norfloxacin IP 400 Tablets (Orfloxa-500 Tablets)",
      "OxytetracyclineHCL Tablets IP 500 mg",
      "Cephelexin Tablets IP 250 mg (Phalexin Tablets)",
      "Cephelexin Tablets IP 500 mg (Phalexin 500 Tablets)",
      "Roxithromycin Tablets IP 150 mg (Roxcip Tablets)",
      "Roxithromycin Tablets IP 300 mg (Roxcip 300 Tablets)",
      "Roxithromycin 150 mg & Ambroxol HCl 60 mg Tablets",
      "Sparfloxacin Tablets IP 200 mg (Sparcip Tablets)",
      "Tetracycline Hydrochloride IP 1.0 gm",
      "Tinidazole Tablets IP 300 mg",
      "Ofloxacin 200 mg & Tinidazole 600 mg Tablets (Tnoflax Tablets)",
      "Rifampicin 450 mg & Isoniazid 300 mg Tablets (Tripison Tablets)"
    ],
    "ANTIFUNGAL DRUG": [
      "Griseofulvin Tablets IP 125 mg (Griflurin Tablets)",
      "Griseofulvin Tablets IP 250 mg",
      "Griseofulvin Tablets IP 500 mg"
    ],
    "ANTITUBERCULOSIS": [
      "Pyrizinamide Tablets IP 500 mg (Pyzimide-500 Tablets)",
      "Pyrizinamide Tablets IP 750 mg (Pyzid Tablets)",
      "Pyrizinamide Tablets IP 1 gm (Pyzimide Tablets)",
      "Rifampicin 100 mg & Isoniazid 100 mg Tablets (Rifazide Tablets)",
      "Ethambutol HCL Tablets IP 200 mg (Cibutol-200 Tablets)",
      "Ethambutol HCL Tablets IP 400 mg (Cibutol-400 Tablets)",
      "Ethambutol HCL Tablets IP 800 mg (Cibutol-800 Tablets)"
    ],
    "CORTICOSTEROIDS": [
      "Prednisolone Tablets IP 5 mg (Presol Tablets)",
      "Prednisolone Tablets IP 10 mg (Presol 10 Tablets)",
      "Dexamethasone Sodium Tablets IP 0.5 mg(Dexocip Tablets)"
    ],
    "HORMONAL DRUG": [
      "Thyroxine Sodium Tablets IP 100 mcg (Thycip Tablets)"
    ],
    "ANALGESIC DECONGESTANT": [
      "Paracetamol 300 mg, Chlorophenaramine Maleate 4 mg & caffin Anhydrous 15 (Coldcip Tablets)",
      "Paracetamol 300 mg, Chlorophenaramine Maleate 1.5 mg & Phenylpropanolamine HCl 12.5 mg Tablets (Cipocold Tablets)"
    ],
    "CALCIUM SUPPLIMENTS": [
      "Calcium Gluconate Tablets IP 500 mg"
    ],
    "ANTIFILARIASIS": [
      "Diethylcarbamazine Citrate Tablets 100 mg"
    ],
    "NUTRITION SUPPLIMENTS": [
      "Vitavion Forte Tablets",
      "Vitamulti Tablets",
      "Vitavion Tablets (B-Complex Tablet)",
      "Cipivit Tablets",
      "Cipniurovon Tablets (Theraputic)",
      "Thiamine Hydrochloride tabletsIP 10 mg (Civita Tablets)",
      "Cunienzyme Tablets",
      "Multivit Tablet",
      "Nuvit Tablets",
      "Ascorbic Acid Tablets IP 500 mg",
      "Zinc Sulphate Dispersible Tablets IP 10 mg",
      "Zinc Sulphate Dispersible Tablets IP 20 mg"
    ]
  };

  const categories = [
    { id: 'tablets', name: 'Tablets', icon: '💊', count: productData.tablets.length },
    { id: 'liquid', name: 'Liquid', icon: '🧴', count: productData.liquid.length },
  ];

  const currentProducts = productData[activeCategory] || [];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={{...styles.title, fontSize: isMobile ? '2rem' : '3.5rem'}}>Our Pharmaceutical Products</h1>
        <p style={styles.subtitle}>
          Premium quality medications crafted with precision and care for better health outcomes
        </p>
      </div>

      {/* Category Navigation */}
      <div style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <button
            key={category.id}
            style={
              activeCategory === category.id 
                ? {...styles.categoryButton, ...styles.activeCategory}
                : styles.categoryButton
            }
            onClick={() => setActiveCategory(category.id)}
          >
            <span style={styles.categoryIcon}>{category.icon}</span>
            <span style={styles.categoryName}>{category.name}</span>
            <span style={styles.categoryCount}>({category.count})</span>
          </button>
        ))}
      </div>

      {/* Products Grid or View More List */}
      {showViewMore ? (
        <div style={styles.viewMoreContainer}>
          <button onClick={() => setShowViewMore(false)} style={styles.backButton}>Back to Products</button>
          {Object.entries(viewMoreData).map(([category, products]) => (
            <div key={category} style={styles.categorySection}>
              <h3 style={styles.categoryTitle}>{category}</h3>
              <ul style={styles.productList}>
                {products.map((product, index) => (
                  <li key={index} style={styles.productItem}>{product}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.productsGrid}>
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              style={{
                ...styles.productCard,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => product.id === 8 && setShowViewMore(true)}
            >
              {activeCategory === 'tablets' ? (
                <>
                  {/* Product Image */}
                  <div style={styles.imageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        ...styles.productImage,
                        transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    <div style={styles.categoryBadge}>{product.category}</div>
                  </div>

                  {/* Product Info */}
                  <div style={styles.productInfo}>
                    <h3 style={styles.productName}>{product.name}</h3>
                    <p style={styles.productDescription}>{product.description}</p>

                    {/* Features */}
                    <div style={styles.featuresContainer}>
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} style={styles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    {/* <div style={styles.actionButtons}>
                      <button style={styles.detailsButton}>View Details</button>
                      <button style={styles.inquireButton}>Inquire Now</button>
                    </div> */}
                  </div>

                  {/* Hover Overlay */}
                  {hoveredProduct === product.id && (
                    <div style={styles.hoverOverlay}>
                      <div style={styles.overlayContent}>
                        <span style={styles.overlayText}>Quick View</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Liquid Product Card */
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productComposition}>{product.composition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Looking for Specific Medications?</h2>
        <p style={styles.ctaText}>
          Our extensive product portfolio includes a wide range of pharmaceutical solutions. 
          Contact us to learn more about our complete offerings.
        </p>
        <div style={styles.ctaButtons}>
          <button style={styles.primaryCtaButton}>Browse Full Catalog</button>
          <button style={styles.secondaryCtaButton}>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1400px',
    margin: '100px auto',
    margintop: '100px',
    minHeight: '100vh',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    transition: 'all 0.8s ease-out',
  },
  title: {
    fontSize:'3.5rem',
    color: '#305d94',
    marginBottom: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #305d94 0%, #305d94 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },
  categoryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '15px 25px',
    border: '2px solid #e0e0e0',
    background: 'white',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#666',
  },
  activeCategory: {
    background: 'linear-gradient(135deg, #046171ff 0%, #33b0c5 100%)',
    color: 'white',
    borderColor: '#33b0c5',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(46, 125, 50, 0.3)',
  },
  categoryIcon: {
    fontSize: '1.2rem',
  },
  categoryName: {
    fontSize: '1rem',
  },
  categoryCount: {
    fontSize: '0.9rem',
    opacity: '0.7',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  productCard: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.6s ease-out',
    border: '1px solid #e0e0e0',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    height: '250px',
    background: 'linear-gradient(135deg, #b8c9d4 0%, #a0b4c0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  productImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  categoryBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: '#305d94',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  productInfo: {
    padding: '25px',
  },
  productName: {
    fontSize: '1.4rem',
    color: '#33b0c5',
    marginBottom: '10px',
    fontWeight: '600',
  },
  productDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontSize: '1rem',
  },
  productComposition: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontSize: '1rem',
    whiteSpace: 'pre-line',
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  featureTag: {
    background: '#e8f5e8',
    color: '#305d94',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
  },
  detailsButton: {
    flex: '1',
    background: 'transparent',
    border: '2px solid #305d94',
    color: '#305d94',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  inquireButton: {
    flex: '1',
    background: 'linear-gradient(135deg, #123561ff 0%, #305d94 100%)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  hoverOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#305d94',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  overlayContent: {
    color: 'white',
    textAlign: 'center',
  },
  overlayText: {
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '60px 30px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)',
    borderRadius: '20px',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    color: '#305d94',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  ctaText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
    maxWidth: '600px',
    margin: '0 auto 30px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryCtaButton: {
    background: 'linear-gradient(135deg, #123662ff 0%, #305d94 100%)',
    color: 'white',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(46, 125, 50, 0.3)',
  },
  secondaryCtaButton: {
    background: 'transparent',
    color: '#33b0c5',
    padding: '15px 40px',
    border: '2px solid #33b0c5',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  viewMoreContainer: {
    marginBottom: '60px',
  },
  backButton: {
    background: 'linear-gradient(135deg, #133d70ff 0%, #305d94 100%)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  categorySection: {
    marginBottom: '40px',
  },
  categoryTitle: {
    fontSize: '1.8rem',
    color: '#305d94',
    marginBottom: '20px',
    fontWeight: 'bold',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
  },
  productList: {
    listStyleType: 'none',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '15px',
  },
  productItem: {
    background: '#f8f9fa',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    fontSize: '0.95rem',
    color: '#333',
    lineHeight: '1.4',
  },
};

export default Products;
