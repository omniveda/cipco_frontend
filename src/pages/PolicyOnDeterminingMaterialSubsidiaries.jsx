import React,{useEffect,useState} from 'react';

export default function PolicyOnDeterminingMaterialSubsidiaries() {
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
            <h1 className="text-3xl font-bold mb-4 break-words">POLICY ON DETERMINING MATERIAL SUBSIDIARIES</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">OBJECTIVE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Board of Directors (The “Board”) of Cipco Limited (“the Company”) has adopted the following policy and procedures with regard to determination of Material Subsidiaries as defined below.<br />
                This Policy is applicable to the Company in terms of Regulation 16 (1) (c) of Chapter IV of Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (“Listing Regulations”).<br />
                The Company is required to disclose the Policy on its website and a web link thereto shall be provided in the Annual Report. All the words and expressions used in this Policy, unless defined hereafter, shall have meaning respectively assigned to them under the LODR Regulations and in the absence of its definition or explanation therein, as per the Companies Act, 2013 and the Rules, Notifications and Circulars made/issued thereunder, as amended, from time to time.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">DEFINITIONS:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>“Act” means Companies Act, 2013 including any statutory modification or re- enactment thereof.</li>
                <li>“Audit Committee or Committee” means Audit Committee constituted by the Board of Directors of the Company, from time to time under the provisions of SEBI (Listing Obligations and Disclosure Requirement) Regulation, 2015, and/or the Companies Act, 2013.</li>
                <li>“Board of Directors” or “Board” means the Board of Directors of Cipco, as constituted from time to time.</li>
                <li>“Company” means Cipco Limited</li>
                <li>“Control” shall include the right to appoint majority of the directors or to control the management or policy decisions exercisable by a person or persons acting individually or in concert, directly or indirectly, including by virtue of their shareholding or management rights or shareholder agreements or voting agreements or in any other manner.</li>
                <li>“Holding Company” means Holding Company as defined under Section 2 (46) of the Act.</li>
                <li>“Listing Regulations” shall mean the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.</li>
                <li>“Policy” means this Policy on Material Subsidiary and as may be amended from time to time.</li>
                <li>“Subsidiary” shall be as defined under Section 2(87) of the Companies Act, 2013 and the Rules made thereunder.</li>
                <li>“Significant Transaction or Arrangement” shall mean any transaction or arrangement that, individually or taken together with other transactions during a financial year, exceeds ten percent of the total revenues or total expenses or total assets or total liabilities, as the case may be, of the unlisted material subsidiary for the immediately preceding accounting year.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">IDENTIFICATION OF ‘MATERIAL’ SUBSIDIARY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                A subsidiary shall be considered as “Material Subsidiary if its income or net worth exceeds ten percent of the consolidated income or net worth respectively of the listed entity and its subsidiaries in the immediately preceding accounting year. An Unlisted Material Indian Subsidiary shall mean an unlisted subsidiary, incorporated in India, whose income or net worth (i.e. paid up capital and free reserves) exceeds 10 percent of the Consolidated income or net worth respectively, of the company and its subsidiaries in the immediately preceding accounting year.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">GOVERNANCE FRAMEWORK:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>The Audit Committee of Board of the Company shall review the financial statements, in particular, the investments made by the unlisted subsidiary.</li>
                <li>The minutes of the Board Meetings of the Unlisted Subsidiary shall be placed before the Board of the Company.</li>
                <li>The management shall quarterly (along with Audit Committee reviews) bring to the attention of the Board of Directors of the Company, a statement of all significant transactions and arrangements entered into by the unlisted subsidiary.</li>
                <li>At least one Independent Director of the Company shall be a director on the Board of the unlisted Indian subsidiary. This oversight shall extend to material step-down subsidiaries (subsidiaries of such unlisted subsidiaries), and the Audit Committee/Board shall monitor compliance accordingly.</li>
                <li>It is clarified that these provisions of Regulation 24 are applicable to unlisted material Indian subsidiaries. Oversight of foreign subsidiaries shall be guided by good governance practices, though not strictly mandated under LODR.</li>
                <li>The Company and its material unlisted subsidiaries incorporated in India shall undertake secretarial audit and shall annex with its annual report, a secretarial audit report, given by a company secretary in practice, in such form as may be specified.</li>
                <li>The Company shall disclose all events or information with respect to its subsidiaries which are material for the Company. Such disclosure shall be in compliance with Regulation 30 (Material Event disclosure) of SEBI (LODR) Regulations, 2015.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">DISPOSAL OF MATERIAL SUBSIDIARY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The following disposals shall not be permitted to the Company: The Company shall not dispose of the shares in its material subsidiary which would reduce the Company shareholding (either on its own or together with other subsidiaries) to less than 50% or cease the exercise of control over the subsidiary without passing a special resolution in its General Meeting, except in cases where such divestment is made under a scheme or arrangement duly approved by a Court/Tribunal or under a resolution plan duly approved under section 31 of the Insolvency Code and such an event is disclosed to the recognized stock exchanges within one day of the resolution plan being approved. The Company shall not sell, dispose off and lease assets amounting to more than twenty percent of the assets of the material subsidiary on an aggregate basis during a financial year without prior approval of the shareholders by way of special resolution, unless the sale / disposal / lease is made under a scheme of arrangement duly approved by a Court/Tribunal or under a resolution plan duly approved under section 31 of the Insolvency Code and such an event is disclosed to the recognized stock exchanges within one day of the resolution plan being approved.<br />
                It is further clarified that these restrictions shall apply whether the disposal is effected directly by the Company or indirectly through another subsidiary.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">AMENDMENTS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Board shall have the power to amend any of the provisions of this Policy in consultation with the Chairman of the Audit Committee. Any amendment shall also be in line with applicable changes in the SEBI (LODR) Regulations, the Companies Act, 2013, and SEBI Circulars, as amended from time to time.<br />
                This Policy shall be reviewed at least once every three years or earlier, in case of any regulatory changes.
            </p>
        </div>
        </section>
    );
}
