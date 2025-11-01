import React, { useState, useEffect } from 'react';

export default function CorporateSocialResponsibilityPolicy() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={`${isMobile ? 'mt-[100px] animate-fadeInUp' : 'mx-[100px] mt-[100px] animate-fadeInUp'}`}>
        <div className="container p-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px] mt-[100px] max-w-screen-lg overflow-x-hidden">
            <h1 className="text-3xl font-bold mb-4 break-words">CORPORATE SOCIAL RESPONSIBILITY POLICY</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">1. OBJECTIVE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The objective of this Policy document is to articulate Cipco’s core philosophy of social responsibility, to define the areas chosen by Cipco to impact the society with its efforts towards Corporate Social Responsibility (“CSR”) and to define the governance &amp; monitoring framework for ensuring effectiveness of this Policy. CSR Policy is in compliance, and in agreement with Section 135 of the Act, i.e.
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>To formulate and recommend to the Board, a Corporate Social Responsibility Policy which shall indicate the activities to be undertaken by the Company as specified in Schedule VII to the Act.</li>
                <li>To recommend the amount of expenditure to be incurred on CSR activities.</li>
                <li>To monitor the CSR Policy.</li>
                <li>To ensure that the Company spends in every financial year, at least 2 (two) % of the average net profits of the Company made during the 3 (three) preceding financial years.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">2. DEFINITIONS:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>"Act" means Companies Act, 2013 any modifications and/ or re-enactment thereof;</li>
                <li>“Corporate Social Responsibility (CSR)” means and includes but is not limited to:-<br />
                    a. Projects or programs relating to activities specified in Schedule VII to the Act; or<br />
                    b. Projects or programs relating to activities undertaken by the Board of Directors of the Company in pursuance of recommendations of the CSR Committee of the Board according to the CSR Policy of the Company, subject to the condition that such policy will cover subjects enumerated in Schedule VII to the Act;</li>
                <li>“CSR Committee” means the Corporate Social Responsibility Committee of the Board as may be constituted under Section 135 of the Act and any reconstitution of the same from time to time. In absence of such committee, the Board shall be assumed the responsibilities of the committee;</li>
                <li>“Board” means the Board of Directors of the Company from time to time;</li>
                <li>“SEBI (LODR) Regulations, 2015” means Listing Obligations and Disclosure Requirements Regulations, 2015 as notified by the Securities and Exchange Board of India on September 02, 2015 effective from December 01, 2015 and any modification and amendment thereto.</li>
                <li>“CSR Implementation Agency” shall mean an entity such as a registered trust, society, or company established under Section 8 of the Act, which has a track record of at least three years in undertaking similar CSR activities, and which is duly registered with the Ministry of Corporate Affairs by filing Form CSR-1, as per the Companies (CSR Policy) Amendment Rules, 2021.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">3. CONSTITUTION:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>The CSRC shall always consist of at least three (3) directors, out of which at least one (1) director shall be an independent director.</li>
                <li>Membership of the CSRC shall be disclosed in the Annual Report.</li>
                <li>The Company Secretary of the Company shall act as the Secretary of the CSRC</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">4. ROLES AND RESPONSIBILITIES:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>To disclose the composition of the CSRC in the Board’s Report;</li>
                <li>To formulate and recommend to the Board, a CSR Policy which shall indicate the activities to be undertaken by the Company as specified in Schedule VII to the Act;</li>
                <li>To recommend the amount of expenditure to be incurred on CSR activities;</li>
                <li>To monitor the CSR Policy of the Company from time to time;</li>
                <li>To ensure unspent CSR funds are dealt with as per Section 135(5) and (6) of the Act and CSR Amendment Rules, 2021, i.e., unspent CSR amounts (not relating to ongoing projects) shall be transferred to a designated fund specified in Schedule VII within six months from the end of the financial year, and in case of ongoing projects, such unspent amounts shall be transferred to a special ‘Unspent CSR Account’ within 30 days from the end of the financial year and spent within three financial years, failing which, the same shall be transferred to a fund specified in Schedule VII.</li>
                <li>To ensure that if CSR projects are implemented through an external agency, such agency must be an eligible implementation agency as defined under CSR Rules, 2021, and registered with the MCA through Form CSR-1.</li>
                <li>To disclose contents of the CSR Policy in its report and also mandatorily place it on the Company's website, in compliance with the SEBI (LODR) Regulations, 2015 and Companies (CSR Policy) Rules, 2014 as amended.;</li>
                <li>To ensure that the activities as included in the CSR Policy of the Company are undertaken by the Company;</li>
                <li>To ensure that the Company spends, in every financial year, at least 2 (two) % of the average net profits of the Company made during the three immediately preceding financial years, in pursuance of its CSR Policy;<br />
                    Provided that the Company shall give preference to the local area and areas around it where it operates, for spending the amount earmarked for CSR activities.<br />
                    The Company shall include the Annual Report on CSR in the format prescribed in Annexure II of the Companies (CSR Policy) Rules, 2014 (as amended), and attach the same to the Board’s Report.<br />
                    Provided further that if the Company fails to spend such amount, the Board shall, in its report made under clause (o) of sub-section (3) of section 134 of the Act, specify the reasons for not spending the amount.<br />
                    Monitoring and Impact Assessment: The CSR Committee shall define and implement a robust monitoring mechanism to track progress of CSR projects and programs. Independent impact assessment shall be conducted for CSR projects with outlays of ₹1 crore or more, or projects running for one year or more, in compliance with CSR Rules. The findings of the impact assessment shall be placed before the Board and disclosed as required under applicable law.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">5. GENERAL:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>This Policy would be subject to revision/amendment in accordance with the guidelines as may be issued by the Ministry of Corporate Affairs from time to time, on the subject matter. In any case, the CSR Committee shall review this Policy every year once for making suitable amendments for better implementation thereof.</li>
                <li>The Company reserves its right to alter, modify, add, delete or amend any of the provisions of this Policy.</li>
                <li>The power to interpret and administer this Policy shall rest with the Chairman of the CSR Committee whose decision shall be final and binding. The Chairman is also empowered to make any supplementary rules/orders to ensure effective implementation of this Policy. These will, however, be reported to or tabled before the CSR Committee, from time to time, to ensure the CSR Committee’s oversight on these issues.</li>
            </ol>
        </div>
        </section>
    );
}
