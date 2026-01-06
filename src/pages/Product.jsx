import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import med1 from '../assets/product/otab5.webp';
import med2 from '../assets/product/otab6.webp';
import med3 from '../assets/product/otab7.webp';
import med4 from '../assets/product/otab8.webp';
import med5 from '../assets/product/otab1.webp';
import med6 from '../assets/product/otab2.webp';
import med7 from '../assets/product/otab3.webp';
import medi from '../assets/product/medi.webp';


const Products = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('tablets');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showViewMore, setShowViewMore] = useState(false);
  const [showViewButton, setShowViewButton] = useState(true);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  const scrollToHero = () => {
    setIsVisible(false);
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsVisible(true), 600);
  };

  const scrollToProducts = () => {
    setIsVisible(false);
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsVisible(true), 600);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobile(false);
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
      }
    ],
    liquid: [
      {
        "id": 1,
        "name": "Co-Trimoxazole Oral Suspension IP",
        "composition": "Each 5 ml Contains:\nTrimethoprim IP 40 mg\nSulphamethoxazole IP 200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 2,
        "name": "Metronidazole Benzoate Oral Suspension IP 40 mg/ml",
        "composition": "Each ml Contains:\nMetronidazole Benzoate IP\nEq. to Metronidazole 40 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 3,
        "name": "Metronidazole Benzoate Oral Suspension IP 50 mg/ml",
        "composition": "Each ml Contains:\nMetronidazole Benzoate IP\nEq. to Metronidazole 50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 4,
        "name": "Paracetamol Paediatric Oral Suspension IP 125 mg/5 ml",
        "composition": "Each 5 ml Contains:\nParacetamol IP 125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 5,
        "name": "Cyproheptadine Syrup IP 2 mg/5 ml",
        "composition": "Each 5 ml Contains:\nCyproheptadine HCl IP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 6,
        "name": "Paracetamol Paediatric Syrup IP 125 mg/5 ml",
        "composition": "Each 5 ml Contains:\nParacetamol IP 125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 7,
        "name": "Promethazine HCl Syrup IP 5 mg/5 ml",
        "composition": "Each 5 ml Contains:\nPromethazine HCl IP 5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 8,
        "name": "Albendazole Oral Suspension IP 200 mg/5 ml",
        "composition": "Each 5 ml Contains:\nAlbendazole IP 200 mg\nIn Flavored Syrup Base Q.S.\nColour :Approved Colour"
      },
      {
        "id": 9,
        "name": "Chloroquine Phosphate Oral Suspension IP 50 mg/5 ml",
        "composition": "Each 5 ml Contains:\nChloroquine Phosphate IP\nEq. to Chloroquine 50 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 10,
        "name": "Paracetamol Paediatric Oral Suspension IP 150 mg/ ml",
        "composition": "Each ml Contains:\nParacetamol IP 150 mg\nIn Flavored Syrup Base Q.S.\nColour :Approved Colour"
      },
      {
        "id": 11,
        "name": "Ibuprofen Oral Suspension 100 mg/5 ml",
        "composition": "Each 5 ml Contains:\nIbuprofen IP 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 12,
        "name": "Disodium Hydrogen Citrate Syrup BP 1.4 gm/5 ml",
        "composition": "Each 5 ml Contains:\nDisodium Hydrogen Citrate BP 1.4 gm\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 13,
        "name": "Chloroquine Syrup IP 50 mg/5 ml",
        "composition": "Each 5 ml Contains:\nChloroquine Phosphate IP\nEq. to Chloroquine 50 mg\nIn Flavoured Syrup Base Q.S.\nColour: Ponceau 4R Red"
      },
      {
        "id": 14,
        "name": "Cetirizine Syrup IP 5 mg/5ml",
        "composition": "Each 5 ml Contains :\nCetirizine Hydrochloride IP 5 mg\nIn Flavored Syrup Base q.s.\nColour : Tartrazine"
      },
      {
        "id": 15,
        "name": "Diphenhydramine Hydrochloride, Ammonium Chloride and Sodium Citrate Syrup",
        "composition": "Each 5 ml Contains:\nDiphenhydramine Hydrochloride IP 14.08 mg\nAmmonium Chloride IP 138 mg\nSodium Citrate IP 57.03 mg\nIn Mentholated Syrup Base Q.S.\nColour: Caramel Black"
      },
      {
        "id": 16,
        "name": "Levocetirizine Hydrochloride and Montelukast Sodium Syrup",
        "composition": "Each 5 ml Contains:\nLevocetirizine Hydrochloride IP 2.5 mg\nMontelukast Sodium IP 4 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        "id": 17,
        "name": "Domperidone Suspension IP 1 mg/ml",
        "composition": "Each ml Contains:\nDomperidone IP 1 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        "id": 18,
        "name": "Levocetirizine Hydrochloride Syrup 2.50 mg/5 ml",
        "composition": "Each 5 ml Contains:\nLevocetirizine Hydrochloride IP 2.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Tartrazine"
      },
      {
        "id": 19,
        "name": "Mebendazole Oral Suspension 100 mg/5 ml",
        "composition": "Each 5 ml Contains:\nMebendazole IP 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        "id": 20,
        "name": "Dextromethorphan Hydrobromide and Chlorpheniramine Maleate Syrup",
        "composition": "Each 5 ml Contains:\nDextromethorphan Hydrobromide IP 10 mg\nChlorpheniramine Maleate IP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        "id": 21,
        "name": "Terbutaline Sulphate, Guaiphenesin, Ambroxol Hydrochloride and Menthol Syrup",
        "composition": "Each 5 ml Contains:\nTerbutaline Sulphate IP 2.5 mg\nGuaiphenesin IP 100 mg\nAmbroxol Hydrochloride IP 30 mg\nMenthol IP 2.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        "id": 22,
        "name": "Terbutaline Sulphate, Guaiphenesin, Ambroxol Hydrochloride and Menthol Syrup",
        "composition": "Each 5 ml Contains:\nTerbutaline Sulphate IP 1.25 mg\nGuaiphenesin IP 50 mg\nAmbroxol Hydrochloride IP 15 mg\nMenthol IP 2.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        "id": 23,
        "name": "Diphenhydramine Hydrochloride, Ammonium Chloride, Sodium Citrate and Menthol Syrup (For Govt.Supply use only)",
        "composition": "Each 5 ml Contains:\nDiphenhydramine Hydrochloride IP 15 mg\nAmmonium Chloride IP 150 mg\nSodium Citrate IP 60 mg\nMenthol IP 1 mg\nIn Flavored Syrup Base Q.S.\nColour: Caramel Black"
      },
      {
        "id": 24,
        "name": "Zinc Sulphate Oral Solution IP",
        "composition": "Each 5 ml Contains :\nZinc Sulphate Monohydrate IP\nEq. to Elemental Zinc 20 mg\nIn Flavored Syrup Base q.s.\nColour : Sunset Yellow"
      },
      {
        "id": 25,
        "name": "Dextromethorphan Hydrobromide, Chlorpheniramine Maleate, Guaiphenesin, and Ammonium Chloride Syrup",
        "composition": "Each 5 ml Contains:\nDextromethorphan Hydrobromide IP 5 mg\nChlorpheniramine Maleate IP 2.5 mg\nGuaiphenesin IP 50 mg\nAmmonium Chloride IP 60 mg\nIn Flavored Syrup Base Q.S.\nColour: Carmosine Red"
      },
      {
        "id": 26,
        "name": "Ofloxacin and Metronidazole Benzoate Oral Suspension",
        "composition": "Each 5 ml Contains:\nOfloxacin IP 50 mg\nMetronidazole Benzoate IP\nEq. to Metronidazole 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        "id": 27,
        "name": "Lactulose Oral Syrup 10 gm/15 ml",
        "composition": "Each 15 ml Contains:\nLactulose IP 10 gm\nIn Flavored Syrup Base Q.S.\nColour: Sunset Yellow"
      },
      {
        "id": 28,
        "name": "Co- Trimoxazole Oral Suspension IP",
        "composition": "Each 5 ml Contains:\nTrimethoprim IP 80 mg\nSulphamethoxazole IP 400 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 29,
        "name": "Paracetamol Paediatric Oral Suspension IP 100 mg/ml",
        "composition": "Each ml Contains:\nParacetamol IP 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 30,
        "name": "Pheniramine Maleate Syrup 15 mg/ ml",
        "composition": "Each ml Contains\nPheniramine Maleate IP 15 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 31,
        "name": "Paracetamol Paediatric Oral Suspension ",
        "composition": "Each 5 ml Contains:\nIP 250 mg/5 ml Paracetamol IP 250 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 32,
        "name": "Ambroxol Hydrochloride Syrup 30 mg/ 5 ml",
        "composition": "Each 5 ml contains:\nAmbroxol Hydrochloride IP 30 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 33,
        "name": "Salbutamol Syrup IP 2 mg/ 5 ml",
        "composition": "Each 5 ml Contains\nSalbutamol Sulphate IP\nEquivalent to Salbutamol 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 34,
        "name": "Levosalbutamol, Ambroxol Hydrochloride and Guaiphenesin Syrup",
        "composition": "Each 5 ml Contains:\nLevosalbutamol Sulphate IP\nEquivalent to Levosalbutamol 1 mg\nAmbroxol Hydrochloride IP 30 mg\nGuaiphenesin IP 50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 35,
        "name": "Metronidazole Benzoate Oral Suspension IP 100 mg/5ml",
        "composition": "Each 5 ml Contains:\nMetronidazole Benzoate IP\nEq. to Metronidazole 100 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 36,
        "name": "Furazolidone Oral Suspension IP 25 mg/5 ml",
        "composition": "Each 5 ml Contains:\nFurazolidone IP 25 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 37,
        "name": "Ofloxacin Oral Suspension IP 50 mg/5ml",
        "composition": "Each 5 ml Contains:\nOfloxacin IP 50 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 38,
        "name": "Haloperidol Oral Solution IP 2 mg/ml",
        "composition": "Each ml Contains:\nHaloperidol IP 2 mg\nAqua’s Base Q.S."
      },
      {
        "id": 39,
        "name": "Ondansetron Syrup 2 mg / 5 ml ",
        "composition": "Each 5 ml Contains:\nOndansetron IP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 40,
        "name": "Chlorpheniramine Maleate Syrup 2 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nChlorpheniramine Maleate IP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 41,
        "name": "Chlorpromazine Hydrochloride Syrup 25 mg/5 ml",
        "composition": "Each 5 ml Contains:\nChlorpromazine Hydrochloride IP 25 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 42,
        "name": "Cetirizine Oral Solution BP 5 mg",
        "composition": "Each 5 ml Contains :\nCetirizine Hydrochloride BP 5 mg\nIn Flavored Syrup Base q.s.\nColour : Approved Colour"
      },
      {
        "id": 43,
        "name": "Chloramphenicol Oral Suspension IP 125 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nChloramphenicol Palmitate IP\nEquivalent to Chloramphenicol 125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 44,
        "name": "Levocetirizine Dihydrochloride Syrup 2.5 mg /5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nLevocetirizine Dihydrochloride USP 2.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 45,
        "name": "Paracetamol Oral Suspension BP 250 mg/5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nParacetamol BP 250 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 46,
        "name": "Paracetamol Oral Suspension BP 125 mg / 5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nParacetamol BP 125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 47,
        "name": "Paracetamol Syrup IP 250 mg/5 ml",
        "composition": "Each 5 ml Contains:\nParacetamol IP 250 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 48,
        "name": "Lactulose Solution USP 10 gm/ 15 ml ",
        "composition": "Each 15 ml Contains:\nLactulose Concentrate Solution USP\nEquivalent to Lactulose 10 gm\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 49,
        "name": "Aceclofenac and Paracetamol Suspension",
        "composition": "Each 5 ml Contains:\nAceclofenac IP 50 mg\nParacetamol IP 125 mg\nIn Flavored Syrup Base Q.S.\nColour :Approved Colour"
      },
      {
        "id": 50,
        "name": "Posaconazole Oral Suspension 40 mg/ ml",
        "composition": "Each ml Contains:\nPosaconazole 40 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 51,
        "name": "Aluminium, Magnesium and Simethicone oral Suspension IP (Antacid)",
        "composition": "Each 5 ml Contains:\nDried Aluminium Hydroxide Gel IP 125 mg\nMagnesium Hydroxide IP 125 mg\nSimethicone IP 12.5 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 52,
        "name": "Aceclofenac and Paracetamol Suspension (For Export)",
        "composition": "Each 5 ml Contains:\nAceclofenac BP 50 mg\nParacetamol BP 125 mg\nIn Flavored Syrup Base Q.S.\nColour :Approved Colour"
      },
      {
        "id": 53,
        "name": "Salbutamol Oral Solution BP 2 mg/ 5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nSalbutamol Sulfate BP\nEquivalent to Salbutamol 2 mg\nIn Flavored Syrup Base Q.S.\nColor: Approved Colour"
      },
      {
        "id": 54,
        "name": "Zinc Sulphate Oral Solution USP (For Export)",
        "composition": "Each 5 ml Contains :\nZinc Sulphate Monohydrate USP\nEq. to Elemental Zinc 20 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 55,
        "name": "Aluminium, Magnesium and Simethicone oral Suspension IP (Antacid)",
        "composition": "Each 5 ml Contains:\nDried Aluminium Hydroxide Gel IP 250 mg\n(Equivalent to Aluminium Hydroxide 191.25 mg)\nMagnesium Hydroxide IP 250 mg\nSimethicone IP 50 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 56,
        "name": "Acyclovir Oral Suspension IP 200 mg/5 ml",
        "composition": "Each 5 ml Contains:\nAcyclovir IP 200 mg\nIn Flavoured Syrup Base Q.S.\nColour :Approved Colour"
      },
      {
        "id": 57,
        "name": "Alumina,Magnesia and Simethicone oral suspension USP (Antacid) (For Export)",
        "composition": "Each 5 ml Contains:\nDried Aluminium Hydroxide Gel USP 250 mg\n(Equivalent to Aluminium hydroxide 191.25 mg)\nMagnesium Hydroxide USP 250 mg\nSimethicone USP 50 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 58,
        "name": "Ofloxacin and Metronidazole Benzoate Oral Suspension (For Export)",
        "composition": "Each 5 ml Contains:\nOfloxacin BP 50 mg\nMetronidazole Benzoate BP\nEq. to Metronidazole 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 59,
        "name": "Dextromethorphan Hydrobromide, and Chlorphenamine Maleate Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nDextromethorphan Hydrobromide BP 10 mg\nChlorphenamine Maleate BP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 60,
        "name": "Levocetirizine Dihydrochloride and Montelukast Sodium Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nLevocetirizine Dihydrochloride USP 2.5 mg\nMontelukast Sodium BP 4 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 61,
        "name": "Nystatin Oral Suspension BP 100000 IU (For Export)",
        "composition": "Each ml Contains:\nNystatin BP 100000 IU\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 62,
        "name": "Aluminium, Magnesium and Simethicone Oral Suspension IP (Antacid)",
        "composition": "Each 5 ml Contains:\nAluminium Hydroxide Gel IP 250 mg\nMagnesium Hydroxide IP 250 mg\nSimethicone IP 50 mg\nIn Flavored Syrup Base Q.S.\nColour : Approved Colour"
      },
      {
        "id": 63,
        "name": "Chlorphenamine Oral Solution BP 2 mg/5ml (For Export)",
        "composition": "Each 5 ml Contains:\nChlorphenamine Maleate BP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 64,
        "name": "Metronidazole Oral Suspension BP 125 mg/ 5ml (For Export)",
        "composition": "Each 5ml Contains:\nMetronidazole Benzoate BP\nEq. to Metronidazole 125 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 65,
        "name": "Paediatric Co-trimoxazole Oral Suspension BP (For Export)",
        "composition": "Each 5 ml Contains:\nTrimethoprim BP 40 mg\nSulfamethoxazole BP 200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 66,
        "name": "Terbutaline Sulfate, Guaifenesin, Ambroxol Hydrochloride and Menthol Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nTerbutaline Sulfate BP 1.25 mg\nGuaifenesin BP 50 mg\nAmbroxol Hydrochloride BP 15 mg\nMenthol BP 2.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 67,
        "name": "Albendazole Oral Suspension USP 200 mg/5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nAlbendazole USP 200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 68,
        "name": "Levosalbutamol, Ambroxol Hydrochloride and Guaifenesin Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nLevosalbutamol Sulphate\nEquivalent to Levosalbutamol 1 mg\nAmbroxol Hydrochloride BP 30 mg\nGuaiphenesin BP 50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 69,
        "name": "Magaldrate and Simethicone Oral Suspension USP (For Export)",
        "composition": "Each 5 ml Contains:\nMagaldrate USP 400 mg\nSimethicone USP 60 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 70,
        "name": "Dextromethorphan Hydrobromide, Syrup",
        "composition": "Each 5 ml Contains:\nDextromethorphan Hydrobromide IP 13.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 71,
        "name": "Ambroxol Hydrochloride and Cetirizine Hydrochloride Oral Syrup (For Export)",
        "composition": "Each 5 ml contains:\nAmbroxol Hydrochloride BP 30 mg\nCetirizine Hydrochloride BP 25 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 72,
        "name": "Diphenhydramine Hydrochloride, Sodium Citrate and Ammonium Chloride oral Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nDiphenhydramine Hydrochloride BP 14.08 mg\nSodium Citrate BP 57.03 mg\nAmmonium Chloride BP 138 mg\nIn Mentholated Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 73,
        "name": "Phenylpropanolamine Hydrochloride , Dextromethorphan Hydrobromide, and Chlorphenamine Maleate Oral Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nPhenylpropanolamine Hydrochloride BP 12.5 mg\nDextromethorphan Hydrobromide BP 10 mg\nChlorphenamine Maleate BP 2 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 74,
        "name": "Salbutamol, Bromhexine Hydrochloride and Guaiphenesin Oral Syrup (For Export)",
        "composition": "Each 5 ml Contains:\nSalbutamol Sulfate BP\nEquivalent to Salbutamol 1 mg\nBromhexine Hydrochloride BP 2 mg\nGuaifhenesin BP 50 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 75,
        "name": "Oxcarbazepine Oral Suspension USP 300 mg / 5 ml (For Export Only)",
        "composition": "Each 5 ml Contains:\nOxcarbazepine USP 300 mg\nFlavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 76,
        "name": "Dextromethorphan Hydrobromide, Syrup IP 10 mg/5 ml",
        "composition": "Each 5 ml Contains:\nDextromethorphan Hydrobromide IP 10.0 mg\nFlavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 77,
        "name": "Bromhexine Hydrochloride Syrup 8 mg/5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nBromhexine Hydrochloride BP 8 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 78,
        "name": "Paracetamol Suspension 120 mg/5 ml (For Export)",
        "composition": "Each 5 ml contains:\nParacetamol BP 120 mg\nFlavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 79,
        "name": "Metronidazole Oral Suspension BP 200 mg/ 5ml (For Export)",
        "composition": "Each 5 ml Contains:\nMetronidazole Benzoate BP\nEq. to Metronidazole 200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 80,
        "name": "Ibuprofen Oral Suspension BP 100 mg/5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nIbuprofen BP 100 mg\nFlavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 81,
        "name": "Mebendazole Oral Suspension USP 100 mg/5 ml (For Export)",
        "composition": "Each 5 ml Contains:\nMebendazole USP 100 mg\nFlavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 82,
        "name": "Amodiaquine Hydrochloride Suspension 50 mg/ 5ml (For Export)",
        "composition": "Each 5 ml Contains:\nAmodiaquine Hydrochloride USP\nEquivalent to Amodiaquine 50 mg\nFlavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 83,
        "name": "Ambroxol HCL, Terbutaline Sulphate and Guaiphenesin Syrup (For Govt. Supply Only)",
        "composition": "Each 5 ml Contains:\nAmbroxol HCL IP 15 mg\nTerbutaline Sulphate IP 1.5 mg\nGuaiphenesin IP 50 mg\nIn Flavored Syrup Base Containing Menthol\nColour: Approved Colour"
      },
      {
        "id": 84,
        "name": "Zidovudine Oral Solution IP 50 mg /5 ml",
        "composition": "Each 5 ml Contains:\nZidovudine IP 50 mg\nFlavoured Syrup Base: Q.S.\nColour: Approved Colour"
      },
      {
        "id": 85,
        "name": "Levetiracetam Oral Solution IP 100 mg / ml",
        "composition": "Each ml Contains:\nLevetiracetam IP 100 mg\nFlavoured Syrup Base: Q.S.\nColour: Approved Colour"
      },
      {
        "id": 86,
        "name": "Azithromycin Oral Suspension IP 100 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nAzithromycin IP (Dihydrate)\nEquivalent to Azithromycin Anhydrous 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 87,
        "name": "Azithromycin Oral Suspension IP 200 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nAzithromycin IP (Dihydrate)\nEquivalent to Azithromycin Anhydrous 200 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 88,
        "name": "Iron and Folic Acid Syrup IP",
        "composition": "Each 5 ml Contains:\nDried Ferrous Sulphate IP\nEquivalent to Elemental Iron 100 mg\nFolic Acid IP 0.5 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 89,
        "name": "Vitamin B Complex Syrup (For Prophylactic Use)",
        "composition": "Each 5 ml Contains:\nThiamin Hydrochloride IP (B1) 1 mg\nRiboflavin IP (B2) 1 mg\nNiacinamide IP (B3) 15 mg\nPyridoxine Hydrochloride IP (B6) 0.5 mg\nCyanocobalamin IP (B12) 0.500 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 90,
        "name": "Vitamin B Complex with D-Panthenol Syrup (For Prophylactic Use)",
        "composition": "Each 5 ml Contains:\nThiamin Hydrochloride IP (B1) 1 mg\nRiboflavin IP (B2) 1 mg\nNiacinamide IP (B3) 15 mg\nPyridoxine Hydrochloride IP (B6) 1 mg\nD-Panthenol IP 1 mg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 91,
        "name": "Vitamin A Paediatric Oral Solution IP",
        "composition": "Each ml Contains:\nVitamin A Palmitate IP 100000 IU\nFlavoured Edible Oil Base Q.S."
      },
      {
        "id": 92,
        "name": "Calcium Phosphate, Vitamin D3 and ",
        "composition": "Each 5 ml Contains:\nCalcium Phosphate IP 240 mg\nVitamin B12 Suspension (Equivalent to Calcium 82 mg)\nCholecalciferol (D3) IP 200 IU\nCyanocobalamin IP (B12) 2.5 mcg\nIn Flavored Syrup Base Q.S.\nColour: Erythrosine Red"
      },
      {
        "id": 93,
        "name": "Prednisolone Sodium Phosphate Oral Solution BP 5 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nPrednisolone Sodium Phosphate BP\nEquivalent to Prednisolone 5 mg\nIn Flavoured Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 94,
        "name": "Erythromycin Estolate Oral Suspension USP 100 mg/ 5 ml (For Government Supply use only)",
        "composition": "Each 5 ml Contains:\nErythromycin Estolate USP\nEquivalent to Erythromycin 100 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        "id": 95,
        "name": "Erythromycin Estolate Oral Suspension USP 125 mg/ 5 ml",
        "composition": "Each 5 ml Contains:\nErythromycin Estolate USP\nEquivalent to Erythromycin 125 mg\nIn Flavoured Syrup Base Q.S.\nColour: Permitted Colour"
      },
      {
        "id": 96,
        "name": "Ferrous Ascorbate and Folic Acid Oral Suspension (For Export)",
        "composition": "Each 5 ml Contains:\nFerrous Ascorbate\nEquivalent to Elemental Iron 30 mg\nFolic Acid BP 550 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 97,
        "name": "Ferric Ammonium Citrate,Folic Acid and Vitamin B12 Syrup",
        "composition": "Each 5 ml Contains\nFerric Ammonium Citrate IP 100 mg\nFolic Acid IP 0.5 mg\nCyanocobalamin (B12) IP 3.75 mcg\nIn Flavoured Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 98,
        "name": "Multivitamin Syrup (For Prophylactic Use)",
        "composition": "Each 5 ml Contains\nVitamin A (Palmitate) IP 1600 IU\nCholecalciferol (Vit.D3) IP 200 IU\nThiamin Hydrochloride (Vit.B1) IP 1 mg\nRiboflavin (Vit.B2) IP 1 mg\nNiacinamide (Vit. B3) IP 15 mg\nCalcium D Pantothenate (Vit. B5) IP 1 mg\nPyridoxine Hydrochloride (Vit. B6) IP 0.5 mg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 99,
        "name": "Vitamin B Complex Syrup (For Prophylactic Use)",
        "composition": "Each 5 ml Contains\nThiamine Hydrochloride IP (Vit.B1) 2 mg\nRiboflavin IP (Vit.B2) 2.5 mg\nNiacinamide IP (Vit. B3) 15 mg\nCalcium D Pantothenate IP (Vit. B5) 3 mg\nPyridoxine Hydrochloride IP (Vit. B6) 0.75 mg\nCyanocobalamin IP (Vit. B12) 1 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 100,
        "name": "Vitamin A Pediatric Oral Solution USP (For Export)",
        "composition": "Each ml Contains:\nVitamin A (As Palmitate) USP 100000 IU\nFlavored Edible Oil Base Q.S."
      },
      {
        "id": 101,
        "name": "Calcium Phosphate, Vitamin D3 and Vitamin B12 Suspension (For Export)",
        "composition": "Each 5 ml Contains:\nCalcium Phosphate BP 240 mg\n(Equivalent to Elemental Calcium 82 mg)\nCholecalciferol (D3) BP 200 IU\nCyanocobalamin BP (B12) 2.5 mcg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      },
      {
        "id": 102,
        "name": "Vitamin B Complex Syrup (For Prophylactic Use only) (For Export)",
        "composition": "Each 5 ml Contains:\nThiamin Hydrochloride BP (B1) 1 mg\nRiboflavin BP (B2) 1 mg\nNicotinamide BP (B3) 15 mg\nPyridoxine Hydrochloride BP (B6) 0.5 mg\nCyanocobalamin BP (B12) 0.500 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 103,
        "name": "Ferrous Ascorbate and Folic Acid Oral Suspension IP",
        "composition": "Each 5 ml Contains:\nFerrous Ascorbate IP\nEquivalent to Elemental Iron 30 mg\nFolic Acid IP 550 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 104,
        "name": "Iron,Folic Acid and Vitamin B12 Syrup (Napo Fefo – up) (For Export)",
        "composition": "Each 15 ml Contains:\nFerric Ammonium Citrate USP\nEquivalent to Elemental Iron 32 mg\nFolic Acid BP 0.5 mg\nCyanocobalamin BP (B12) 7.5 mcg\nIn Flavored Syrup Base Q.S.\nColour:Approved Colour"
      },
      {
        "id": 105,
        "name": "Multivitamin Syrup (For Export)",
        "composition": "Each 15 ml Contains:\nCyproheptadine HCL (anhydrous) BP 4 mg\nVitamin A (Palmitate) BP 1600 IU\nVitamin D3 BP 200 IU\nThiamin Hydrochloride B1 BP 2 mg\nRiboflavin (B2) BP 2 mg\nNicotinamide (B3) BP 15 mg\nCyanocobalamin(B12) BP 1 mcg\nDexpanthenol USP 5 mg\nCalcium Lactate BP 100 mg\nIn Flavored Syrup Base Q.S.\nColour: Approved Colour"
      }
    ]
  };

  // const viewMoreData = {
  //   "IRON AND FOLIC ACID TABLETS": [
  //     "Iron (333 mg) and Folic Acid (0.5 mg) Tablets IP (Film Coated)",
  //     "Iron (335 mg) and Folic Acid (0.5 mg) Tablets IP (Enteric Coated)",
  //     "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Sugar Coated)",
  //     "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Film Coated)",
  //     "Iron (67 mg) and Folic Acid (0.1 mg) Tablets IP (Enteric Coated)",
  //     "Iron (333 mg) and Folic Acid (0.5 mg) Tablets IP (Sugar Coated)"
  //   ],
  //   "ANTIMALARIA": [
  //     "Chloroquine Phosphate Tablets IP 250 mg (Malariaklin Tables)",
  //     "Pyrimethamine 25 mg and sulphamethaxazole 500 mg Tablets (Sypalfin Tablets)",
  //     "Pyrimethamine 25 mg and sulphamethaxazole 500 mg (Citakalfin Tablets)",
  //     "Primaquine phosphate Tablets IP 7.5 mg",
  //     "Quinine Sulphate Tablets IP 300 mg (Q-Sulpha Tablets)",
  //     "Artemether (20 mg) & Lumefantrine (120 mg) Dispersible Tablets",
  //     "Artemether (40 mg) & Lumefantrine (240 mg) Tablets",
  //     "Artemether (80 mg) & Lumefantrine (480 mg) Tablets",
  //     "Quinine Sulphate Tablets IP 100 mg",
  //     "Quinine Sulphate Tablets IP 300 mg"
  //   ],
  //   "ANTIEMETIC": [
  //     "Domperidone Tablets IP 10 mg",
  //     "Domperidone Tablets IP 20 mg",
  //     "Cinnarizine Tablets IP 25 mg (C – Zine Tablets)",
  //     "Cisapride Monohydrate Tablets 10 mg (Cipride Tablets)",
  //     "Paracetamol 325 mg and Domperidone 20 mg (Dopomol Tablets)",
  //     "Ondansetron Tablets IP 4 mg",
  //     "Ondansetron Tablets IP 8 mg (Ontron Tablets)",
  //     "Metoclopramide Tablets IP 10 mg (Pnorm Tablets)"
  //   ],
  //   "ANTIVIRAL": [
  //     "Acyclovir Tablets IP 400 mg",
  //     "Acyclovir Tablets IP 800 mg"
  //   ],
  //   "ANTACID": [
  //     "Aluminium Hydroxide 250 mg, Magnesium Hydroxide 250 mg & Sodium bicarbonate 50 mg Tablets (Antacid tablets)",
  //     "Cimetidine Tablets IP 200 mg",
  //     "Ranitidine Tablets USP 150 Mg (Acioff Tablets)",
  //     "Ranitidine Tablets USP 300 Mg (Acioff 300 Tablets)",
  //     "Ranitidine 150 mg & Domperidone 10 mg Tablets (Acioff- DM Tablets)"
  //   ],
  //   "ANTISPASMODIC": [
  //     "Dicyclomine HCl 20 mg & Paracetamol 250 mg(Cipspas Tablets)",
  //     "Dicyclomin HCl Tablets IP 10 mg",
  //     "Dicyclomin HCl Tablets IP 20 mg",
  //     "Diclofenac potassium BP 50 mg & Dicyclomin HCl IP 20 mg Tablets (D Difen Tablets)",
  //     "Ranitidine150 mg & Dicyclomine 10 mg(Raneidine Tablet)"
  //   ],
  //   "ANTIBIOTIC": [
  //     "Azithromycin Tablets IP 250 mg",
  //     "Azithromycin Tablets IP 500 mg",
  //     "Ciprofloxacin Tablets IP 250 mg (Cipnex-250 Tablets)",
  //     "Ciprofloxacin Tablets IP 500 mg (Cipnex-500 Tablets)",
  //     "Ciprofloxacin 500 mg & Tinidazole 600 mg (Cipnex-TZ Tablets)",
  //     "Co-Trimoxazole Tablets IP (PAEDITRIC)[Trimethoprim 20 mg & Sulphamethoxazole 100 mg]",
  //     "Co-Trimoxazole Tablets IP [Trimethoprim 40 mg & Sulphamethoxazole 200 mg]",
  //     "Trimethoprim 160 mg & Sulphamethazole 800 mg Tablets IP (Calprim DS Tablets)",
  //     "Trimethoprim 80 mg & Sulphamethazole 400 mg Tablets IP (Calprim Tablets)",
  //     "Erythromycin Stearate Tablets IP 250 mg (Ericin 250 Tablets)",
  //     "Erythromycin Stearate Tablets IP 500 mg(Ericin 500 Tablets)",
  //     "Metronidazole Tablets IP 200 mg",
  //     "Metronidazole Tablets IP 400 mg",
  //     "Cefadroxil Tablets IP 250 mg",
  //     "Cefadroxil Tablets IP 250 mg",
  //     "Cefixime Tablets USP 200 mg (Cixime-200 Tablets)",
  //     "Cefuroxime Axetil Tablet USP 500 mg",
  //     "Cephalexine Tablets IP 750 mg",
  //     "Dapsone Tablets IP 100 mg",
  //     "Dapsone Tablets IP 100 mg (Dsone Tablets)",
  //     "Gatifloxacin Tablets IP 400 mg (Gaticin Tablets)",
  //     "Glimepride Tablets USP 1 mg (Gipride Tablets)",
  //     "Glimepride Tablets USP 2 mg (Gipride 2 Tablets)",
  //     "Levofloxacin Tablets IP 250 mg",
  //     "Mycophenolate Mofitil Tablets IP 250 mg(Mycotil-250 Tablets)",
  //     "Mycophenolate Mofitil Tablets IP 500 mg(Mycotil-500 Tablets)",
  //     "Nalidixic Acid Tablets IP 250 mg (Nalacid 250 Tablets)",
  //     "Nalidixic Acid Tablets IP 500 mg (Nalacid 500 Tablets)",
  //     "Ofloxacin Tablets IP 200 mg",
  //     "Ofloxacin IP 200 mg & Norfloxacin IP 600 Tablets(Ofnar Tablets)",
  //     "Ofloxacin IP 500 mg & Norfloxacin IP 200 Tablets (Orfloxa Tablets)",
  //     "Ofloxacin IP 500 mg & Norfloxacin IP 400 Tablets (Orfloxa-500 Tablets)",
  //     "OxytetracyclineHCL Tablets IP 500 mg",
  //     "Cephelexin Tablets IP 250 mg (Phalexin Tablets)",
  //     "Cephelexin Tablets IP 500 mg (Phalexin 500 Tablets)",
  //     "Roxithromycin Tablets IP 150 mg (Roxcip Tablets)",
  //     "Roxithromycin Tablets IP 300 mg (Roxcip 300 Tablets)",
  //     "Roxithromycin 150 mg & Ambroxol HCl 60 mg Tablets",
  //     "Sparfloxacin Tablets IP 200 mg (Sparcip Tablets)",
  //     "Tetracycline Hydrochloride IP 1.0 gm",
  //     "Tinidazole Tablets IP 300 mg",
  //     "Ofloxacin 200 mg & Tinidazole 600 mg Tablets (Tnoflax Tablets)",
  //     "Rifampicin 450 mg & Isoniazid 300 mg Tablets (Tripison Tablets)"
  //   ],
  //   "ANTIFUNGAL DRUG": [
  //     "Griseofulvin Tablets IP 125 mg (Griflurin Tablets)",
  //     "Griseofulvin Tablets IP 250 mg",
  //     "Griseofulvin Tablets IP 500 mg"
  //   ],
  //   "ANTITUBERCULOSIS": [
  //     "Pyrizinamide Tablets IP 500 mg (Pyzimide-500 Tablets)",
  //     "Pyrizinamide Tablets IP 750 mg (Pyzid Tablets)",
  //     "Pyrizinamide Tablets IP 1 gm (Pyzimide Tablets)",
  //     "Rifampicin 100 mg & Isoniazid 100 mg Tablets (Rifazide Tablets)",
  //     "Ethambutol HCL Tablets IP 200 mg (Cibutol-200 Tablets)",
  //     "Ethambutol HCL Tablets IP 400 mg (Cibutol-400 Tablets)",
  //     "Ethambutol HCL Tablets IP 800 mg (Cibutol-800 Tablets)"
  //   ],
  //   "CORTICOSTEROIDS": [
  //     "Prednisolone Tablets IP 5 mg (Presol Tablets)",
  //     "Prednisolone Tablets IP 10 mg (Presol 10 Tablets)",
  //     "Dexamethasone Sodium Tablets IP 0.5 mg(Dexocip Tablets)"
  //   ],
  //   "HORMONAL DRUG": [
  //     "Thyroxine Sodium Tablets IP 100 mcg (Thycip Tablets)"
  //   ],
  //   "ANALGESIC DECONGESTANT": [
  //     "Paracetamol 300 mg, Chlorophenaramine Maleate 4 mg & caffin Anhydrous 15 (Coldcip Tablets)",
  //     "Paracetamol 300 mg, Chlorophenaramine Maleate 1.5 mg & Phenylpropanolamine HCl 12.5 mg Tablets (Cipocold Tablets)"
  //   ],
  //   "CALCIUM SUPPLIMENTS": [
  //     "Calcium Gluconate Tablets IP 500 mg"
  //   ],
  //   "ANTIFILARIASIS": [
  //     "Diethylcarbamazine Citrate Tablets 100 mg"
  //   ],
  //   "NUTRITION SUPPLIMENTS": [
  //     "Vitavion Forte Tablets",
  //     "Vitamulti Tablets",
  //     "Vitavion Tablets (B-Complex Tablet)",
  //     "Cipivit Tablets",
  //     "Cipniurovon Tablets (Theraputic)",
  //     "Thiamine Hydrochloride tabletsIP 10 mg (Civita Tablets)",
  //     "Cunienzyme Tablets",
  //     "Multivit Tablet",
  //     "Nuvit Tablets",
  //     "Ascorbic Acid Tablets IP 500 mg",
  //     "Zinc Sulphate Dispersible Tablets IP 10 mg",
  //     "Zinc Sulphate Dispersible Tablets IP 20 mg"
  //   ]
  // };

  const viewMoreData = {
  "ALL TABLETS": [
    "Diethyl Carbamazine Citrate Tablets IP 50 mg",
    "Hydrochlorothiazide Tablets IP 50 mg",
    "Methylergometrine Maleate Tablets IP 125 mcg",
    "Co-Trimoxazole Tablets IP (Trimethoprim 20 mg + Sulphamethoxazole 100 mg)",
    "Chlorpheniramine Maleate Tablets IP 4 mg",
    "Fexofenadine Hydrochloride Tablets IP 180 mg",
    "Rabeprazole Gastro Resistant Tablets IP 20 mg",
    "Mycophenolate Mofetil Tablets IP 250 mg",
    "Mycophenolate Mofetil Tablets IP 500 mg",
    "Domperidone & Paracetamol Tablets",
    "Ornidazole & Norfloxacin Tablets",
    "Pyrazinamide Tablets IP 750 mg",
    "Pantoprazole Sodium Tablets IP 40 mg",
    "Pyrazinamide Tablets IP 1 gm",
    "Pyrazinamide Tablets IP 500 mg",
    "Nalidixic Acid Tablets IP 250 mg",
    "Nalidixic Acid Tablets IP 500 mg",
    "Rifampicin & Isoniazid Tablets IP (450 mg + 300 mg)",
    "Rifampicin & Isoniazid Tablets IP (100 mg + 100 mg)",
    "Prochlorperazine Maleate Tablets IP 5 mg",
    "Quiniodochlor Tablets IP 125 mg",
    "Phenylbutazone Tablets IP 100 mg",
    "Primaquine Phosphate Tablets IP 7.5 mg",
    "Co-Trimoxazole Tablets IP (Trimethoprim 80 mg + Sulphamethoxazole 400 mg)",
    "Co-Trimoxazole Tablets IP (Trimethoprim 160 mg + Sulphamethoxazole 800 mg)",
    "Aluminium Hydroxide Gel, Magnesium Hydroxide and Methyl Polysiloxane Tablets NFI",
    "Mebendazole Tablets IP 100 mg",
    "Sulphamethoxazole & Pyrimethamine Tablets (25 mg + 500 mg)",
    "Sulphamethoxazole and Trimethoprim Boluses IP (Vet.)",
    "Albendazole Bolus Tablets IP 600 mg (Vet.)",
    "Nimesulide Tablets BP 100 mg",
    "Sulphadoxine & Pyrimethamine Tablets IP (25 mg + 500 mg)",
    "Salbutamol Tablets IP 4 mg",
    "Ofloxacin & Tinidazole Tablets (200 mg + 600 mg)",
    "Paracetamol, Ibuprofen & Chlorzoxazone Tablets",
    "Ofloxacin & Norfloxacin Tablets (200 mg + 600 mg)",
    "Furazolidone Tablets IP 100 mg",
    "Norfloxacin Tablets IP 800 mg",
    "Metoclopramide Tablets IP 10 mg",
    "Norfloxacin Tablets IP 400 mg",
    "Ibuprofen Tablets IP 200 mg",
    "Ibuprofen Tablets IP 400 mg",
    "Dried Ferrous Sulphate Tablets IP 200 mg",
    "Metronidazole Tablets IP 200 mg",
    "Diclofenac Sodium and Paracetamol Tablets IP (50 mg + 250 mg)",
    "Paracetamol Tablets IP 500 mg",
    "Atenolol Tablet IP 50 mg",
    "Sulphaguanidine Tablets 500 mg (Vet.)",
    "Furazolidone & Metronidazole Tablets",
    "Norfloxacin & Tinidazole Tablets (400 mg + 600 mg)",
    "Ciprofloxacin & Tinidazole Tablets (500 mg + 600 mg)",
    "Ciprofloxacin Hydrochloride Tablets IP 500 mg",
    "Ciprofloxacin Hydrochloride Tablets IP 250 mg",
    "Griseofulvin Tablets IP 125 mg",
    "Propranolol Hydrochloride Tablets IP 40 mg",
    "Hydrochlorothiazide Tablets IP 25 mg",
    "Levodopa & Carbidopa Tablets IP (100 mg + 10 mg)",
    "Domperidone Tablets IP 10 mg",
    "Dicyclomine Hydrochloride Tablets IP 20 mg",
    "Griseofulvin Tablets IP 500 mg",
    "Griseofulvin Tablets IP 250 mg",
    "Losartan Potassium Tablets IP 25 mg",
    "Theophylline & Etophylline Tablets",
    "Amlodipine Tablets IP 5 mg",
    "Amlodipine Tablets IP 2.5 mg",
    "Amlodipine Tablets IP 10 mg",
    "Haloperidol Tablets IP 5 mg",
    "Risperidone Tablets IP 4 mg",
    "Risperidone Tablets IP 2 mg",
    "Salbutamol Tablets IP 2 mg",
    "Paracetamol & Dicyclomine Tablets (250 mg + 20 mg)",
    "Cinnarizine Tablets IP 25 mg",
    "Sulphadimidine Tablets IP 5 gm (Vet.)",
    "Ondansetron Tablets IP 8 mg",
    "Ondansetron Tablets IP 4 mg",
    "Methyldopa Tablets IP 250 mg",
    "Dicyclomine Hydrochloride Tablets IP 10 mg",
    "Diethyl Carbamazine Citrate Tablets IP 100 mg",
    "Co-Trimoxazole Tablets IP (Trimethoprim 40 mg + Sulphamethoxazole 200 mg)",
    "Aceclofenac Tablets IP 100 mg",
    "Hydrochlorothiazide Tablets IP 12.5 mg",
    "Levofloxacin Tablets IP 250 mg",
    "Losartan Potassium Tablets IP 50 mg",
    "Ofloxacin Tablets IP 200 mg",
    "Propranolol Hydrochloride Tablets IP 10 mg",
    "Sulphaguanidine Tablets 5 gm (Vet.)",
    "Metronidazole & Furazolidone Bolus (Vet.)",
    "Hydrochlorothiazide & Losartan Potassium Tablets IP",
    "Acyclovir Tablets IP 400 mg",
    "Acyclovir Tablets IP 800 mg",
    "Nimesulide & Paracetamol Tablets",
    "Ferrous Fumarate Tablets IP 200 mg",
    "Quinine Sulphate Tablets IP 100 mg",
    "Quinine Sulphate Tablets IP 300 mg",
    "Artemether & Lumefantrine Tablets IP 40/240 mg",
    "Artemether & Lumefantrine Tablets IP 80/480 mg",
    "Artemether & Lumefantrine Dispersible Tablets IP 20/120 mg",
    "Aceclofenac & Paracetamol Tablets (100 mg + 325 mg)",
    "Zinc Sulphate Dispersible Tablets IP 10 mg",
    "Zinc Sulphate Dispersible Tablets IP 20 mg",
    "Diclofenac Gastroresistant Tablets IP 50 mg",
    "Isoniazid Tablets IP 300 mg",
    "Aciclovir Dispersible Tablets IP 200 mg",
    "Ciprofloxacin Boluses IP 1500 mg (Vet.)",
    "Sulphadiazine and Trimethoprim Boluses IP (Vet.) 1000/200 mg",
    "Sulphadiazine and Trimethoprim Tablets IP (Vet.) 400/80 mg",
    "Sulphadimidine Boluses IP 5 gm (Vet.)",
    "Tinidazole Tablets IP 1800 mg (Vet.)",
    "Ferrous Fumarate Boluses IP 1500 mg (Vet.)",
    "Norfloxacin and Tinidazole Boluses (Vet.)",
    "Diclofenac Potassium Tablets USP 50 mg",
    "Telmisartan Tablets IP 20 mg",
    "Telmisartan Tablets IP 40 mg",
    "Cetirizine Hydrochloride Tablets IP 10 mg",
    "Chlorthalidone Tablets IP 25 mg",
    "Chlorthalidone Tablets IP 50 mg",
    "Paracetamol Tablets IP 650 mg",
    "Paracetamol Tablets BP 500 mg (Export)",
    "Ciprofloxacin Tablets BP 500 mg (Export)",
    "Chlorthalidone Tablets IP 12.5 mg (Govt. supply)",
    "Amlodipine Besilate Tablets BP 5 mg (Export)",
    "Amlodipine Besilate Tablets BP 10 mg (Export)",
    "Cetirizine Tablets BP 10 mg (Export)",
    "Chlorphenamine Tablets BP 4 mg (Export)",
    "Hydrochlorothiazide Tablets BP 50 mg (Export)",
    "Salbutamol Tablets BP 4 mg (Export)",
    "Dicycloverine and Paracetamol Tablets (Export)",
    "Ibuprofen and Paracetamol Tablets IP",
    "Ferrous Sulfate Tablets BP 200 mg (Film Coated, Export)",
    "Ferrous Sulfate Tablets BP 200 mg (Sugar Coated, Export)",
    "Diclofenac Sodium and Paracetamol Tablets IP (325 + 50)",
    "Montelukast Sodium and Levocetirizine Hydrochloride Tablets IP",
    "Dispersible Aciclovir Tablets BP 200 mg (Export)",
    "Artemether & Lumefantrine Dispersible Tablets (Export) 20/120 mg",
    "Artemether & Lumefantrine Tablets (Export) 40/240 mg",
    "Artemether & Lumefantrine Tablets (Export) 80/480 mg",
    "Tinidazole Tablets IP 300 mg",
    "Chloroquine Phosphate Tablets IP 250 mg",
    "Metformin Tablets IP 500 mg (Film Coated)",
    "Tinidazole Tablets IP 500 mg",
    "Dicyclomine & Paracetamol Tablets (325 + 20)",
    "Metformin Tablets IP 500 mg (Uncoated)",
    "Metformin Tablets BP 500 mg (Export)",
    "Ornidazole & Ofloxacin Tablets IP",
    "Albendazole Tablets IP 400 mg (Chewable)",
    "Metronidazole Tablets IP 400 mg",
    "Teneligliptin Tablets IP 20 mg",
    "Etoricoxib Tablets IP 60 mg",
    "Etoricoxib Tablets IP 90 mg",
    "Ivermectin Tablets USP 3 mg",
    "Ivermectin Tablets USP 6 mg",
    "Ivermectin Tablets USP 12 mg",
    "Chlorthalidone Tablets IP 6.25 mg",
    "Deferasirox Tablets IP 250 mg",
    "Deferasirox Tablets IP 500 mg",
    "Sulfadoxine and Pyrimethamine Tablets (Export)",
    "Vildagliptin Tablets IP 50 mg",
    "Vildagliptin and Metformin Tablets 50/500 mg",
    "Loperamide Hydrochloride Tablets USP 2 mg (Export)",
    "Aminophylline Tablets BP 100 mg (Export)",
    "Ivermectin Tablets USP 12 mg (Export)",
    "Promethazine Hydrochloride Tablets BP 25 mg (Export)",
    "Furosemide Tablets BP 40 mg (Export)",
    "Sildenafil Tablets USP 50 mg (Export)",
    "Sildenafil Tablets USP 100 mg (Export)",
    "Tadalafil Tablets USP 10 mg (Export)",
    "Tadalafil Tablets USP 20 mg (Export)",
    "Diclofenac Sodium and Paracetamol Tablets (Export)",
    "Deflazacort Tablets 6 mg (Export)",
    "Hydrochlorothiazide Tablets BP 25 mg (Export)",
    "Montelukast and Levocetirizine Tablets (Export)",
    "Ofloxacin Tablets USP 200 mg (Export)",
    "Pantoprazole Gastro-resistant Tablets BP 40 mg (Export)",
    "Co-trimoxazole Tablets BP (Export)",
    "Losartan Potassium Tablets BP 50 mg (Export)",
    "Metoclopramide Tablets BP 10 mg (Export)",
    "Metronidazole Tablets BP 200 mg (Export)",
    "Albendazole Chewable Tablets 400 mg (Export)",
    "Propranolol Tablets BP 40 mg (Export)",
    "Deflazacort Tablets 30 mg (Export)",
    "Linezolid Tablets 600 mg (Export)",
    "Aceclofenac & Paracetamol Tablets (Uncoated, 100 + 325)",
    "Deflazacort Tablets 24 mg (Export)",
    "Sitagliptin Phosphate Tablets IP 50 mg",
    "Sitagliptin Phosphate Tablets IP 100 mg",
    "Sitagliptin and Metformin Tablets 50/500 mg",
    "Rosuvastatin Tablets IP 5 mg",
    "Rosuvastatin Tablets IP 10 mg",
    "Rosuvastatin Tablets IP 20 mg",
    "Ursodeoxycholic Acid Tablets IP 300 mg",
    "Levocetirizine Tablets IP 5 mg",
    "Levetiracetam Tablets IP 500 mg",
    "Levetiracetam Tablets IP 1000 mg",
    "Atazanavir and Ritonavir Tablets IP 300/100 mg",
    "Lopinavir and Ritonavir Tablets IP 100/25 mg",
    "Linezolid Tablets IP 600 mg",
    "Isoniazid Tablets IP 100 mg",
    "Ursodeoxycholic Acid Tablets IP 150 mg",
    "Sitagliptin and Metformin Tablets 50/1000 mg",
    "Darunavir Tablets IP 600 mg",
    "Lamivudine and Zidovudine Tablets IP 150/300 mg",
    "Hyoscine Butylbromide Tablets BP 10 mg (Export)",
    "Amlodipine Besilate and Atenolol Tablets (Export)",
    "Ciprofloxacin and Tinidazole Tablets (Export, 500/600)",
    "Levofloxacin Tablets USP 500 mg (Export)",
    "Vildagliptin Tablets 50 mg (Export)",
    "Aceclofenac and Paracetamol Tablets (Export, 100/500)",
    "Ferrous Sulfate Tablets BP 150 mg (Export)",
    "Rifampicin, Isoniazid and Ethambutol Tablets (Govt. supply)",
    "Metformin Hydrochloride Sustained Release Tablets IP 1 gm",
    "Amlodipine Tablets IP 5 mg (duplicate govt supply entry)",
    "Ethambutol Tablets IP 400 mg",
    "Ethionamide Tablets IP 125 mg",
    "Levofloxacin Tablets IP 500 mg",
    "Moxifloxacin Tablets 400 mg",
    "Ethambutol Tablets IP 100 mg (Govt. supply)",
    "Rifampicin and Isoniazid Tablets IP (Govt. supply, 75/50)",
    "Rifampicin, Isoniazid and Pyrazinamide Tablets IP (Govt. supply)",
    "Ethambutol Tablets IP 800 mg (Govt. supply)",
    "Nimesulide Tablets 100 mg",
    "Deferasirox Tablets IP 90 mg",
    "Deferasirox Tablets IP 180 mg",
    "Deferasirox Tablets IP 360 mg",
    "Quinine Sulfate Tablets USP 300 mg (Export)",
    "Dolutegravir, Lamivudine and Tenofovir Disoproxil Fumarate Tablets IP",
    "Captopril Tablets BP 25 mg (Export)",
    "Ciprofloxacin Tablets BP 250 mg (Export)",
    "Doxycycline Tablets USP 100 mg (Export)",
    "Diclofenac Gastro-resistant Tablets BP 50 mg (Export)",
    "Sitagliptin and Metformin Tablets (Export) 50/500",
    "Sitagliptin and Metformin Tablets (Export) 50/1000",
    "Vildagliptin and Metformin Tablets (Export) 50/500",
    "Sitagliptin Tablets BP 100 mg (Export)",
    "Albendazole Tablets 150 mg (Vet.)",
    "Albendazole Bolus 1500 mg (Vet.)",
    "Albendazole Bolus 3000 mg (Vet.)",
    "Albendazole Bolus 4000 mg (Vet.)",
    "Fenbendazole Tablets 150 mg (Vet.)",
    "Fenbendazole Bolus 1500 mg (Vet.)",
    "Abacavir and Lamivudine Tablets IP 600/300 mg",
    "Dolutegravir Tablets IP 50 mg",
    "Bedaquiline Tablets 100 mg",
    "Azithromycin Tablets IP 500 mg",
    "Erythromycin Stearate Tablets IP 500 mg",
    "Sparfloxacin Tablets 200 mg",
    "Roxithromycin Tablets IP 150 mg",
    "Prednisolone Tablets IP 5 mg",
    "Prednisolone Tablets IP 10 mg",
    "Vitamin B Complex Tablets (Prophylactic)",
    "Vitamin B Complex Tablets (Therapeutic)",
    "Thiamine Hydrochloride Tablets IP 10 mg",
    "Prednisolone Tablets IP 20 mg",
    "Erythromycin Stearate Tablets IP 250 mg",
    "Azithromycin Tablets IP 250 mg",
    "Multivitamin Tablets (Sugar Coated, A+D+B)",
    "Vitamin B Complex Tablets (with Vitamin C)",
    "Vitamin B Complex Tablets (High-dose, sugar coated)",
    "Ferrous Sulphate & Folic Acid Tablets IP (Paediatric)",
    "Ferrous Sulphate & Folic Acid Tablets IP 100 mg/0.5 mg",
    "Calcium with Vitamin B6 Tablets (Prophylactic)",
    "Folic Acid Tablets IP 5 mg",
    "Tetracycline Bolus 1 gm (Vet.)",
    "Riboflavin Tablet IP 5 mg",
    "Vitamin B Complex Tablets NFI (Prophylactic)",
    "Ascorbic Acid Tablets IP 500 mg",
    "Iron and Folic Acid Tablets IP (333/0.5)",
    "Iron & Folic Acid Tablets IP (67/0.1)",
    "Iron & Folic Acid Tablets IP (335/0.5)",
    "Iron and Folic Acid Tablets IP (67/0.1)",
    "Calcium Citrate Maleate, Cholecalciferol & Folic Acid Tablets",
    "Iron & Folic Acid Tablets IP (150/0.4, sugar coated)",
    "Pyridoxine Tablet IP 40 mg",
    "Vitamin B Complex Tablets (Prophylactic, film coated)",
    "Iron & Folic Acid Tablets IP (150/0.4, film coated)",
    "Iron & Folic Acid Tablets IP (200/0.5, sugar coated, elemental 60 mg)",
    "Iron & Folic Acid Tablets IP (200/0.5, film coated, elemental 60 mg)",
    "Folic Acid Tablets IP 1 mg",
    "Multivitamin with Folic Acid Tablets (Prophylactic, film coated)",
    "Multivitamin with Folic Acid Tablets (Prophylactic, sugar coated)",
    "Iron & Folic Acid Tablets IP (200/0.5, sugar coated, elemental 60 mg, export variant)",
    "Vitamin B Complex Tablets (Therapeutic, strong)",
    "Azithromycin Tablets IP 100 mg",
    "Folic Acid Tablets BP 5 mg (Export)",
    "Riboflavin Tablets 5 mg (Export)",
    "Vitamin B Complex Tablets (Prophylactic, export, uncoated)",
    "Vitamin B Complex Tablets (Prophylactic, export, film coated)",
    "Calcium and Vitamin D3 Tablets IP (500 mg + 250 IU)",
    "Folic Acid Tablets IP 400 mcg (Govt. supply)",
    "Azithromycin Dispersible Tablets IP 100 mg (Govt. supply)",
    "Multivitamin Tablets (Prophylactic, film coated)",
    "Vitamin B Complex Tablets (Prophylactic, export, film coated, B1/B2/B6/B12)",
    "Multivitamin with Folic Acid Tablets (Prophylactic, export)",
    "Vitamin B complex with zinc Tablets NFI (Therapeutic, Govt. supply)",
    "Ferrous Ascorbate & Folic Acid Tablets IP (Govt. supply) 100/0.5",
    "Azithromycin Tablets USP 500 mg (Export)",
    "Prednisolone Tablets BP 5 mg (Export)",
    "Erythromycin Stearate Tablets BP 250 mg (Export)",
    "Erythromycin Stearate Tablets BP 500 mg (Export)",
    "Azithromycin Tablets BP 250 mg (Export)",
    "Prednisolone Tablets BP 20 mg (Export)",
    "Ferrous Ascorbate & Folic Acid Tablets IP 100/1.5",
    "Ferrous Ascorbate & Folic Acid Tablets IP 50/1.5",
    "Chewable Ascorbic Acid Tablets BP 500 mg (Export)",
    "Zinc and Vitamin C Chewable Tablets (Export)",
    "Ferrous Sulphate and Folic Acid Tablets (Folitex Tablets, Export)",
    "Ferrous Sulphate with Folic Acid Tablets (Folirin Tablets, Export)",
    "Ferrous Sulphate with Folic Acid Tablets (Napoferon, Export)",
    "Ferrous Sulphate with Folic Acid Tablets (Napofefo-up, Export)",
    "Multivitamin Tablets (Cyproheptadine + Vitamins, Export)",
    "Multivitamin Tablets (High B-complex, Export)",
    "Vitamin B Complex with Folic Acid Tablets (Prophylactic)",
    "Cholecalciferol Tablets IP 60000 IU",
    "Pyridoxine Tablets IP 50 mg",
    "Pyridoxine Tablets IP 100 mg",
    "Ascorbic Acid Chewable Tablets BP 1000 mg (Export)",
    "Ferrous Sulfate and Folic Acid Tablets 150/0.4 (Export)",
    "Vitamin B Complex Tablets (Vitamin B Compound Strong, Govt. supply)",
    "Combikit of Azithromycin, Fluconazole and Secnidazole Tablets (Export)",
    "Pyridoxine Tablet IP 25 mg",
    "Ferrous Sulfate and Folic Acid Tablets 150/0.4 (Export, variant)",
    "Ascorbic Acid Chewable Tablet BP 1000 mg (Export)",
    "Ferrous Sulfate Tablets 300 mg (USP, Export)"
  ]
};


  const categories = [
    { id: 'tablets', name: 'Tablets', icon: '', count: productData.tablets.length },
    { id: 'liquid', name: 'Liquid', icon: '', count: productData.liquid.length },
  ];

  const currentProducts = productData[activeCategory] || [];

  return (
    <div style={isMobile ? styles.container1 : styles.container}>
      {/* Hero Section */}
      <div style={{ ...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
        <h1 style={{ ...styles.title, textAlign: "center", fontSize: isMobile ? '2rem' : '3.5rem' }}>Our Pharmaceutical Products</h1>
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
                ? { ...styles.categoryButton, ...styles.activeCategory }
                : styles.categoryButton
            }
            onClick={() => { setActiveCategory(category.id), setShowViewMore(false), (category.id === "liquid") ? setShowViewButton(false) : setShowViewButton(true) }}
          >
            <span style={styles.categoryIcon}>{category.icon}</span>
            <span style={styles.categoryName}>{category.name}</span>
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
        <>
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

          {/* View More Button */}
          <div style={styles.viewMoreButtonContainer}>
            {(showViewButton) && <button onClick={() => setShowViewMore(true)} style={styles.viewMoreButton}>
              View More Products
            </button>}
          </div>
        </>
      )}

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Looking for Specific Medications?</h2>
        <p style={styles.ctaText}>
          Our extensive product portfolio includes a wide range of pharmaceutical solutions.
          Contact us to learn more about our complete offerings.
        </p>
        <div style={styles.ctaButtons}>
          {/* <button style={styles.primaryCtaButton} >Browse Full Catalog</button> */}
          <button style={styles.secondaryCtaButton} onClick={() => navigate('/contact-us')}>Contact Sales</button>
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
  container1: {
    padding: '40px 0px',
    maxWidth: '1400px',
    margin: '100px auto',
    margintop: '100px',
    minHeight: '100vh'
  },
  title: {
    fontSize: '3.5rem',
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
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.6',
    textAlign: 'center'
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
    background: '#F3F4F6',
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
  viewMoreButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  viewMoreButton: {
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
};

export default Products;
