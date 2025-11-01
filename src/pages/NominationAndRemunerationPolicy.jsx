import React,{useState,useEffect} from 'react';

export default function NominationAndRemunerationPolicy() {
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
            <h1 className="text-3xl font-bold mb-4 break-words">NOMINATION AND REMUNERATION POLICY</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">1. INTRODUCTION:</h2>
            <p className="text-gray-700 mb-4 break-words">
                In terms of Section 178 of the Companies Act, 2013 and Regulation 19 of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (hereinafter referred to as "Listing Regulations"), as amended from time to time, this policy on nomination and remuneration of Directors, Key Managerial Personnel (KMP), Senior Management and other employees of the Company has been formulated by the Nomination and Remuneration Committee of the Company and approved by the Board of Directors.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">2. APPLICABILITY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Policy is applicable to:<br />
                • Directors (Executive and Non Executive)<br />
                • Key Managerial Personnel<br />
                • Senior Management Personnel<br />
                • Other employees
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">3. OBJECTIVE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Nomination and Remuneration Committee and this Policy shall be in compliance with Section 178 of the Companies Act, 2013 read along with the applicable rules thereto and Regulation 19 and Part D of Schedule II of Listing Regulations. The objective of this policy is to lay down a framework in relation to remuneration of directors, KMP, senior management personnel and other employees. The Key Objectives of the committee would be:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Formulation of the criteria for determining qualifications, positive attributes and independence of a director and recommend to the Board a policy, relating to the remuneration of the directors, key managerial personnel and other employees;</li>
                <li>For every appointment of an Independent Director, the Nomination and Remuneration Committee to evaluate the balance of skills, knowledge and experience on the Board and on the basis of such evaluation, prepare a description of the role and capabilities required of an Independent Director. The person recommended to the Board for appointment as an Independent Director to have the capabilities identified in the description. For the purpose of identifying suitable candidates, the Committee to (i) use the services of external agencies, if required (ii) consider candidates from a wide range of backgrounds, having due regard to diversity and (iii) consider the time commitments of the candidates.</li>
                <li>Formulation of criteria for evaluation of performance of Independent Directors and the Board;</li>
                <li>Devising a policy on Board diversity in compliance with Part D of Schedule II of SEBI (LODR). This policy shall ensure that the Board has an optimum combination of Directors with diverse skills, backgrounds, gender, and experience relevant to the Company’s business;</li>
                <li>Identify persons who are qualified to become directors and who may be appointed in senior management in accordance with the criteria laid down, and recommend to the Board their appointment and removal.</li>
                <li>To extend or continue the term of appointment of the Independent Director, on the basis of the report of performance evaluation of Independent Directors.</li>
                <li>To carry out evaluation of the performance of Directors.</li>
                <li>To ensure that the level and composition of remuneration is reasonable and sufficient to attract, retain and motivate directors of the quality required to run the Company successfully.</li>
                <li>To ensure that the relationship of remuneration to performance is clear and meets appropriate performance benchmarks.</li>
                <li>To ensure that the remuneration to Directors, Key Managerial Personnel (KMP), and senior management of the Company involves a balance between fixed and incentive pay reflecting short and long‐term performance objectives appropriate to the working of the Company and its goals.</li>
                <li>To assist the Board in ensuring that the plans are in place for orderly succession for appointments to the Board and to senior management.</li>
                <li>To recommend to the Board, all remuneration, in whatever form, payable to Senior Management.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">4. DEFINITIONS:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>‘Act’ means Companies Act, 2013 and rules relating thereto.</li>
                <li>‘Board of Directors’ or ‘Board’, in relation to the Company, means the collective body of the directors of the Company.</li>
                <li>‘Committee’ means Nomination and Remuneration Committee of the Company as constituted or reconstituted by the Board</li>
                <li>‘Company’ means Cipco limited.</li>
                <li>‘Directors’ means a director appointed to the Board of a Company.</li>
                <li>‘Independent Director’ means a director referred to in Section 149 (6) of the Companies Act, 2013 and/or as defined under Regulation 16 (b) of the Listing Regulations.</li>
                <li>‘Key Managerial Personnel’ (KMP) means:<br />
                    (a) Chief Executive Officer or the Managing Director or the Manager<br />
                    (b) Company Secretary<br />
                    (c) Whole‐time Director<br />
                    (d) Chief Financial Officer<br />
                    (e) Such other officer, not more than one level below the Directors who is in whole time employment, designated as KMP by the Board and such other officer as may be prescribed.</li>
                <li>“Senior Management” means the officers and personnel of the Company who are members of its core management team excluding Board of Directors comprising all members of management one level below Chief Executive Officer/ Managing Director/ Whole-time Director (including Chief Executive Officer and Manager, in case they are not part of the Board of Directors) and shall specifically include the functional heads, by whatever name called and the Company Secretary and the Chief Financial Officer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">5. CONSTITUTION OF COMMITTEE:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>The Board of Directors of the Company (the Board) constituted the committee known as “Nomination and Remuneration Committee” consisting of three or more non‐executive directors out of which at least two-thirds are independent directors.</li>
                <li>The Chairman of the Committee shall be an Independent Director.</li>
                <li>The Chairperson of the Company (whether executive or nonexecutive) may be appointed as a member of the Nomination and Remuneration Committee but shall not chair such Committee.</li>
                <li>In the absence of the Chairman, the members of the Committee present at the meeting shall choose one amongst them to act as Chairman.</li>
                <li>The Chairperson of the Committee or in his absence, any other member of the committee authorized by him in this behalf shall attend the General Meetings of the Company to answer the shareholders’ queries.</li>
                <li>The Company Secretary shall act as the secretary for Committee meetings.</li>
                <li>Minutes: Minutes of the meetings shall be recorded and maintained by the Company Secretary and shall be presented to the Committee for approval at its subsequent meeting.</li>
                <li>Quorum: The quorum for the Committee meeting shall be one third of its total strength or two members, whichever is higher, including at least one Independent Director and the participation of the members by video conferencing or by other audio visual means shall also be counted for the purposes of quorum.</li>
                <li>The Committee shall meet at least once in a year. Further, the meetings of the Committee shall be held as and when required and as statutorily required under the provisions of Companies Act, 2013, and SEBI (LODR) Regulation 2015 and Rules made thereunder and as per the applicable law, if any, for the time being.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">6. CRITERIA FOR APPOINTMENT OF DIRECTOR AND SENIOR MANAGEMENT:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Committee shall consider the following factors for identifying the person who are qualified to becoming Director and who can be appointed in senior management:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>The Committee shall identify and ascertain the integrity, qualification, expertise and experience of the person for appointment as Director or at Senior Management level and recommend to the Board his / her appointment</li>
                <li>A person should possess adequate qualification, expertise and experience for the position he / she is considered for appointment. The Committee has discretion to decide whether qualification, expertise and experience possessed by a person are sufficient / satisfactory for the concerned position.</li>
                <li>For every appointment of an Independent Director, the NRC shall evaluate the balance of skills, knowledge, and experience on the Board and ensure that the individual possesses capabilities aligned with the identified role description. The NRC may also engage external agencies to assist in the identification process.</li>
                <li>The Company may appoint or continue the employment of any person as Whole‐ time Director who has attained the age of seventy years subject to the approval of shareholders by passing a special resolution. The explanatory statement annexed to the notice for such motion indicating the justification for appointing such person.</li>
                <li>The Company should ensure that the person so appointed as Director/ Independent Director/ Senior Management Personnel shall not be disqualified under the Companies Act, 2013, rules made thereunder, or any other enactment for the time being in force.</li>
                <li>The Director/ Independent Director/ Senior Management Personnel shall be appointed as per the procedure laid down under the provisions of the Companies Act, 2013, rules made thereunder, or under listing regulations or any other enactment for the time being in force.</li>
                <li>Independent Director shall meet all criteria specified in Section 149(6) of the Companies Act, 2013 and rules made thereunder and/or as specified in Regulation 25 of the listing regulations. The Committee shall have discretion to consider and fix any other criteria or norms for selection of the most suitable candidate(s).</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">6A. DISQUALIFICATIONS FOR APPOINTMENT OF DIRECTORS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Pursuant to section 164 of the Companies Act, 2013, a person shall not be eligible for appointment as a director of a Company if:
            </p>
            <ol className="list-lower-alpha list-inside text-gray-700 mb-4 space-y-2">
                <li>He is of unsound mind and stands so declared by a competent court;</li>
                <li>He is an undischarged insolvent;</li>
                <li>He has applied to be adjudicated as an insolvent and his application is pending;</li>
                <li>He has been convicted by a court of any offence, whether involving moral turpitude or otherwise, and sentenced in respect thereof to imprisonment for not less than six months and a period of five years has not elapsed from the date of expiry of the sentence:<br />
                    Provided that if a person has been convicted of any offence and sentenced in respect thereof to imprisonment for a period of seven years or more, he shall not be eligible to be appointed as a director in any Company;</li>
                <li>An order disqualifying him for appointment as a director has been passed by a court or Tribunal and the order is in force;</li>
                <li>He has not paid any calls in respect of any shares of the Company held by him, whether alone or jointly with others, and six months have elapsed from the last day fixed for the payment of the call;</li>
                <li>He has been convicted of the offence dealing with related party transactions under section 188 at any time during the last preceding five years; or</li>
                <li>He has not complied with Section 152(3) ie. he has not been allotted the Director Identification Number under Section 154 of the Act.</li>
                <li>He has not complied with Section 165 (1) ie. he shall not be a Director in more than 20 Companies out of which 10 Companies can be public Companies.</li>
            </ol>
            <p className="text-gray-700 mb-4 break-words">
                No person who is or has been a Director of a Company which:<br />
                • Has not filed financial statements or annual returns for any continuous period of three financial years; or<br />
                • Has failed to repay the deposits accepted by it or pay interest thereon or to redeem any debentures on the due date or pay interest due thereon or pay any dividend declared and such failure to pay or redeem continues for one year or more, shall be eligible to be reappointed as a director of that Company or appointed in other Company for a period of five years from the date on which the said Company fails to do so Provided that where a person is appointed as a Director of a Company which is in default of above mentioned clauses, he shall not incur the disqualification for a period of 6 months from the date of his appointment.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">6B. TERM / TENURE:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Managing Director/Whole‐time Director:<br />
                    The Company shall appoint or re‐appoint any person as its Executive Chairman, Managing Director or Executive Director for a term not exceeding five years at a time. No re‐appointment shall be made earlier than one year before the expiry of term.</li>
                <li>Independent Director:<br />
                    An Independent Director shall hold office for a term up to five consecutive years on the Board of the Company and will be eligible for re‐appointment on passing of a special resolution by the Company and disclosure of such appointment in the Board&#39;s report.<br />
                    No Independent Director shall hold office for more than two consecutive terms of upto maximum of 5 years each, but such Independent Director shall be eligible for appointment after expiry of three years of ceasing to become an Independent Director. Provided that an Independent Director shall not, during the said period of three years, be appointed in or be associated with the Company in any other capacity, either directly or indirectly.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">6C. REMOVAL:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Due to reasons for any disqualification mentioned in the Companies Act, 2013, rules made thereunder or under any other applicable Act, rules and regulations or any other reasonable ground, the Committee may recommend to the Board for removal of a Director or Senior Management Personnel subject to the provisions and compliance of the said Act, rules and regulations.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">6D. RETIREMENT:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Director and Senior Management Personnel shall retire as per the applicable provisions of the Act and the prevailing policy of the Company. The Board will have the discretion to retain the Director or Senior Management Personnel in the same position/ remuneration or otherwise even after attaining the retirement age, for the benefit of the Company.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">7. CRITERIA FOR DETERMINING POSITIVE ATTRIBUTES &amp; INDEPENDENCE OF DIRECTORS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Criteria for determining positive attributes:<br />
                The Committee shall consider the following factor for determining positive attributes of directors (including independent directors):
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Directors are to demonstrate integrity, credibility, trustworthiness, ability to handle conflict constructively, and the willingness to address issues proactively.</li>
                <li>Actively update their knowledge and skills with the latest developments in the pharma industry, market conditions and applicable legal provisions.</li>
                <li>Willingness to devote sufficient time and attention to the Company’s business and discharge their responsibilities.</li>
                <li>To assist in bringing independent judgment to bear on the Board’s deliberations especially on issues of strategy, performance, risk management, resources, key appointments and standards of conduct.</li>
                <li>Ability to develop a good working relationship with other Board members and contribute to the Board&#39;s working relationship with the senior management of the Company.</li>
                <li>To act within their authority, assist in protecting the legitimate interests of the Company, its shareholders and employees</li>
            </ol>
            <p className="text-gray-700 mb-4 break-words">
                Criteria for determining Independence:<br />
                The Independent Director shall qualify the criteria of independence mentioned in Section 149(6) of the Companies Act, 2013 and rules related thereto and in Regulations 16(b) and 25 of Listing Regulations
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">8. PERFORMANCE EVALUATION:</h2>
            <p className="text-gray-700 mb-4 break-words">
                In compliance with Section 134(3)(p) and Section 178 of the Companies Act, 2013, read with Regulation 17(10) and Regulation 19(4) of SEBI (LODR) Regulations, 2015, the Nomination and Remuneration Committee (NRC) shall oversee a structured and formal annual evaluation process of the Board, its Committees and individual Directors, including Independent Directors. The provisions relating to the performance evaluation of the Directors and the Board are as follows:
            </p>
            <p className="text-gray-700 mb-4 break-words">
                Criteria for Evaluation:<br />
                 For the Board: composition, diversity, strategy oversight, risk management, governance practices, succession planning.<br />
                 For Committees: clarity of roles, quality of deliberations, compliance with regulatory requirements, effectiveness in discharging responsibilities.<br />
                 For Individual Directors: integrity, preparedness, participation, independent judgment, contribution to decision-making, leadership qualities.<br />
                 For Independent Directors: bringing objectivity and balance, safeguarding stakeholders’ interests, and constructive engagement with management.
            </p>
            <p className="text-gray-700 mb-4 break-words">
                Process:<br />
                 The NRC shall design a structured questionnaire covering the above criteria, to be circulated to all Board members annually.<br />
                 Each Director shall evaluate the performance of the Board, its Committees, and peer Directors (except themselves) on a scale-based rating.<br />
                 Independent Directors shall separately evaluate the performance of the Board, the Chairperson, and non-independent Directors. Independent Directors to bring objective view in evaluation of performance of Board and Management ‐ Schedule IV(II) of the Act.<br />
                 Performance evaluation of Independent Directors shall be done by entire Board of Directors excluding the Director being evaluated ‐ Schedule IV of the Act and Regulation 17(10) of Listing Regulations.<br />
                 The Board shall, based on NRC’s report, discuss and review the consolidated findings to identify strengths, areas for improvement, and action plans.<br />
                 The results of the evaluation shall form the basis for decisions relating to re-appointment, continuation, or removal of Directors, and also for succession planning.
            </p>
            <p className="text-gray-700 mb-4 break-words">
                Disclosure:<br />
                The manner of evaluation conducted shall be disclosed in the Board’s Report as required under Section 134(3)(p) of the Companies Act, 2013 and Regulation 34 of SEBI (LODR).
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">9. CRITERIA FOR EVALUATION OF THE BOARD, ITS COMMITTEES &amp; INDIVIDUAL DIRECTORS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Pursuant to the provisions of the Companies Act, 2013, the Nomination and Remuneration Committee of the Board is required to carry out annual evaluation of Board, its committees and individual Directors.<br />
                For annual performance evaluation of the Board as a whole, its Committee(s) and individual Directors including the Chairman of the Board, the Company shall formulate a questionnaire to assist in evaluation of the performance. The tool takes the form of a series of assertions/questions which should be awarded a rating on a scale of 1 to 5 by all individual Directors. Every Director has to fill the questionnaire related to the performance of the Board, its Committees and individual Directors except himself. On the basis of the response to the questionnaire, a formal annual evaluation shall be made by the Nomination and Remuneration Committee of the performance evaluation of the Board and that of its Committees and individual Directors.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">10. REMUNERATION OF DIRECTORS, KEY MANAGERIAL PERSONNEL AND OTHER EMPLOYEES:</h2>
            <p className="text-gray-700 mb-4 break-words">
                At the appointment or re‐appointment of Managing Director, Whole‐time Director and KMPs, the Committee will recommend to the Board for their approval, the remuneration to be paid to them.<br />
                The remuneration to be paid to the Senior Management Personnel shall be approved by the Board and other employees shall be as per HR policy of the Company.<br />
                The annual increment of remuneration for Managing Director/Whole‐time Directors shall be made on the basis of the resolution approved by the shareholders. The annual increment in Salary of KMPs (other than Managing Director/Whole‐time Directors), Senior Management Personnel shall be approved by the Board and other employees shall be made as per HR policy of the Company.<br />
                The level and composition of remuneration as determined by the Committee shall be reasonable and sufficient to attract, retain and motivate directors, Key Managerial Personnel and Senior Management of the quality required to run the Company successfully.<br />
                In accordance with Section 178(4) of the Companies Act, 2013 and SEBI (LODR), the remuneration framework shall be guided by the following principles:<br />
                 Remuneration must be reasonable and sufficient to attract, retain, and motivate high-quality Directors and senior executives.<br />
                 The relationship between remuneration and performance shall be clear and shall meet appropriate performance benchmarks.<br />
                 Remuneration shall maintain a balance between fixed and incentive pay, appropriately reflecting both short-term and long-term performance objectives linked to the Company’s strategy.<br />
                The relationship of remuneration to performance should be clear and meet appropriate performance benchmarks. The remuneration should also involve a balance between fixed and incentive pay reflecting short and long‐term performance objectives appropriate to the working of the Company and its goals:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>General:<br />
                    (a) Nomination and Remuneration Committee shall recommend to the Board for its approval, the remuneration, including the commission based on the net profits other Executive Directors. The remuneration shall be subject to the prior/post approval of the shareholders of the Company and Central Government, wherever required.<br />
                    (b) Directors’ and officers’ Insurance : Where any insurance is taken by the Company on behalf of its Whole‐time Director, Chief Executive Officer, Chief Financial Officer, the Company Secretary and any other employees for indemnifying them against any liability, the premium paid on such insurance shall not be treated as part of the remuneration payable to any such personnel. Provided that if such person is proved to be guilty, the premium paid on such insurance shall be treated as part of the remuneration.</li>
                <li>Remuneration to Whole‐time / Managing Director<br />
                    (a) Fixed pay:<br />
                    The Whole‐time Director/ Managing Director shall be eligible for remuneration as may be approved by the Shareholders of the Company on the recommendation of the Committee and the Board of Directors. The break‐up of the pay scale, performance bonus and quantum of perquisites including, employer’s contribution to P.F, pension scheme, medical expenses, club fees etc. shall be decided and approved by the Board on the recommendation of the Committee and shall be within the overall remuneration approved by the shareholders.<br />
                    (b) Minimum Remuneration:<br />
                    If, in any financial year, the Company has no profits or its profits are inadequate, the Company shall pay remuneration to its Whole‐time Director/ Managing Director in accordance with the provisions of the Companies Act, 2013.<br />
                    (c) Provisions for excess remuneration:<br />
                    If any Whole‐time Director/ Managing Director draws or receives, directly or indirectly by way of remuneration any such sums in excess of the limits prescribed under the Act or without the approval required under the Act, he/ she shall refund such sums to the Company, within two years or such lesser period as may be allowed by the Company until such sum is refunded, hold it in trust for the Company. The Company shall not waive recovery of such sum refundable to it unless approved by the Company by Special Resolution within two years from the date the sum becomes refundable.</li>
                <li>Remuneration to Non‐ Executive / Independent Director:<br />
                    (a) Sitting Fees: fees for attending meetings of Board or Committee thereof. Provided that the amount of such fees shall not exceed INR One lakh per meeting of the Board or Committee. The quantum of sitting fees will be determined as per the recommendation of Nomination and Remuneration Committee and approved by the Board of Directors of the Company. Further the boarding and lodging expenses shall be reimbursed to the Directors.<br />
                    (b) Commission:<br />
                    The profit‐linked Commission shall be paid within the monetary limit approved by the Board/ Shareholders of the Company subject to the same not exceeding 1% of the net profits of the Company computed as per the applicable provisions of the Regulations.<br />
                    (a) Stock Options:<br />
                    Pursuant to the provisions of the Act, an Independent Director shall not be entitled to any stock option of the Company. Only such employees of the Company and its subsidiaries as approved by the Nomination and Remuneration Committee will be granted ESOPs.</li>
                <li>Remuneration to KMP, Senior Management Personnel and Other Employees<br />
                    The KMP, Senior Management Personnel and other employees of the Company shall be paid monthly remuneration as per the Company’s HR policies and / or as may approved by the Committee. The break‐up of the pay scale and quantum of perquisites including, employer’s contribution to P.F, pension scheme, medical expenses, club fees etc. shall be as per the Company’s HR policies.<br />
                    The annual variable pay of managers is linked to the performance of the Company in general and their individual performance for the relevant year measured against Company’s objectives fixed in the beginning of the year.<br />
                    This Remuneration Policy shall apply to all future / continuing employment / engagement(s) with the Company. In other respects, the Remuneration Policy shall be of guidance for the Board.</li>
                <li>Malus and Clawback<br />
                    Variable pay awarded to senior management shall be subject to malus and clawback provisions. In cases of proven misconduct, fraud, or material restatement of financial results, the Company reserves the right to withhold or recover variable pay, bonuses, or incentives already disbursed.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">11. DISCLOSURES:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The following disclosures are required under Companies Act, 2013 and the listing regulations:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Nomination and Remuneration Policy shall be placed on the website of the Company and the salient features of the policy and changes therein, if any, along with the web address of the policy shall be disclosed in the Board&#39;s Report. (proviso to Section 178(4) of the Act)</li>
                <li>Company shall disclose the Criteria for performance evaluation of Independent Directors, as laid down by Nomination Committee, in its Annual Report. (Regulation 34 read with Schedule V of Listing Regulations)</li>
                <li>All pecuniary relationship or transactions of the Non‐Executive Directors vis‐à‐vis the Company shall be disclosed in the Annual Report. (Regulation 34 read with Schedule V of listing regulations)</li>
                <li>In addition to the disclosures required under the Companies Act, 2013, the following disclosures on the remuneration of Directors shall be made in the section on the corporate governance of the Annual Report:<br />
                    (a) All elements of remuneration package of individual Directors summarized under major groups, such as salary, benefits, bonuses, stock options, pension etc.<br />
                    (b) Details of fixed component and performance linked incentives, along with the performance criteria.<br />
                    (c) Service contracts, notice period, severance fees.<br />
                    (d) Stock option details, if any ‐ and whether issued at a discount as well as the period over which accrued and over which exercisable. (Regulation 34 read with Schedule V of listing regulations)</li>
                <li>The Company shall publish its criteria of making payments to Non‐Executive Directors in its annual report. Alternatively, this may be put up on the Company’s website and reference drawn thereto in the annual report. (Regulation 34 read with Schedule V of listing regulations)</li>
                <li>The Company shall disclose the number of shares and convertible instruments held by Non‐Executive Directors in the annual report. (Regulation 34 read with Schedule V of listing regulations)</li>
                <li>Non‐Executive Directors shall disclose their shareholding held either by them or on a beneficial basis for any other persons in the listed entity in which they are proposed to be appointed as Directors, in the notice to the general meeting called for appointment of such Director. (Regulation 26 (4) of listing regulations)</li>
                <li>Senior management shall make disclosures to the Board relating to all material financial and commercial transactions, where they have personal interest, that may have a potential conflict with the interest of the Company at large (for e.g. dealing in Company shares, commercial dealings with bodies, which have shareholding of management and their relatives etc.)( Regulation 26 (5) of listing regulations)</li>
                <li>The Company shall disclose in the Board’s report, the ratio of the remuneration of each Director to the median employee’s remuneration and such other details as may be prescribed under Rule 5 of the Companies (appointment and Remuneration of Managerial Personnel) Rules, 2014. (section 197(12) of the Act)</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">12. REVIEW AND AMENDMENT</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>The Board of Directors on its own and / or as per the recommendations of Nomination and Remuneration Committee can amend this Policy, as and when deemed fit. The Company Secretary being the Compliance Officer is also authorized to make amendment in this policy, where there is any statutory changes necessitating the amendment in the policy.</li>
                <li>In case of any amendment(s), clarification(s), circular(s) etc. issued by the relevant authorities, not being consistent with the provisions laid down under this Policy, then such amendment(s), clarification(s), circular(s) etc. shall prevail upon the provisions hereunder and this Policy shall stand amended accordingly from the effective date as laid down under such amendment(s), clarification(s), circular(s) etc.</li>
            </ol>
        </div>
        </section>
    );
}
