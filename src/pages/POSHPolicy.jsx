import React,{useState,useEffect} from 'react';

export default function POSHPolicy() {
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
            <h1 className="text-3xl font-bold mb-4 break-words">POLICY ON PREVENTION, PROHIBITION AND REDRESSAL OF SEXUAL HARRASSMENT AT WORKPLACE</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">1. PHILOSOPHY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                CIPCO LIMITED (“Company”) is an equal employment opportunity company and is committed to creating a healthy working environment that enables employees to work without fear of prejudice, gender bias and has zero tolerance against sexual harassment. The Company also believes that all its employees have the right to be treated with dignity and respect. Sexual harassment at the work place or other than work place, if involving employees, is a grave offence and will invite serious disciplinary action.<br />
                This Policy is known as Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) (hereinafter referred to as ‘Policy‘). This Policy is meant to educate the employees about what conduct constitutes sexual harassment, the ways and means which we are adopting to prevent occurrence of any such event, and in the unlikely chance of such an occurrence, to enable a fair mechanism for dealing with such conduct.<br />
                The Policy is made under the overall ambit of the Company’s Code of Conduct and in accordance with the provisions under The Sexual Harassment of Women at Workplace (Prevention, Prohibition &amp; Redressal) Act, 2013 (hereinafter referred to as ‘Act’) and its Rules.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">2. OBJECTIVE, SCOPE &amp; EFFECTIVE DATE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Policy is to define the guidelines and the process to be followed in order to provide protection against sexual harassment of women at workplace and for the prevention and redressal of complaints of sexual harassment in addition to the matters connected therewith or incidental thereto at all locations where the Company has a presence. For any doubt or further clarification, reference be made to The Sexual Harassment of Women at Workplace (Prevention, Prohibition &amp; Redressal) Act, 2013 and Rules thereto.<br />
                While the Act specifically addresses protection of women, the Company extends this Policy to cover all employees, regardless of gender, recognizing that men and individuals of other gender identities may also be victims of sexual harassment.<br />
                This Policy is applicable to:<br />
                a) Every employee across the Company – permanent, temporary, on training and on contract.<br />
                b) An alleged act of sexual harassment, whether the act of sexual harassment has taken place at the work place or outside the workplace of the Company;<br />
                c) An alleged acts of sexual harassment, whether the incident has occurred during or beyond office hours.<br />
                 physical contact and advances; or<br />
                 a demand or request for sexual favours; or<br />
                 making sexually coloured remarks; or<br />
                 showing pornography; or<br />
                 any other unwelcome physical, verbal or non-verbal conduct of sexual nature such as obnoxious comments or utterances, remarks or jokes, letters, phone calls, SMS or emails, gestures, stalking, sounds or display of a nature with sexual overtures.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">3. DEFINITIONS:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Sexual Harassment” includes any one or more of the following unwelcome acts or behavior (whether directly or by implication) namely;-<br />
                    The following circumstances, among other circumstances, if it occurs or is present in relation to or connected with any act or behavior of sexual harassment may amount to sexual harassment:-<br />
                     Implied or explicit promise of preferential treatment in her employment; or<br />
                     Implied or explicit threat of detrimental treatment in her employment; or<br />
                     Implied or explicit threat about her present or future employment status; or<br />
                     Interference with her work or creating an intimidating or offensive or hostile work environment for her; or<br />
                     Humiliating treatment likely to affect her health or safety.</li>
                <li>“Disciplinary Authority” - means Chairman of Company who is responsible for award of punishment as recommended by the Committee</li>
                <li>“Employee” means any person on the rolls of the Company including those on deputation, contract, temporary and part time provided that an employee engaged through a contractor and consultants shall be an employee within the meaning of the Policy.</li>
                <li>“Outsider” means any person who is not an employee of Company and includes a candidatewho is attending interview, customer, client, creditor, debtor or any other external person who is not an employee.</li>
                <li>“Workplace” means and shall include not only the Company’s offices and project sites but also any place visited by an employee arising out of or during the course of employment, including official travel, client locations, work-related events, and transportation provided by the Company, in accordance with the Act.</li>
                <li>“Internal Complaints Committee” means a committee formed under this policy, pursuance to the provisions of the Act, for redressal of matters connected with sexual harassment.</li>
            </ol>
            <p className="text-gray-700 mb-4 break-words">
                For any other term for which no separate definition is given, the definition given under respective law in force will apply.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">4. CONSTITUTION, ROLE AND POWERS OF INTERNAL COMPLAINTS COMMITTEE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                 In accordance with the provisions of Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act &amp; Rules, 2013, the Company has formed an Internal Complaints Committee to manage the process of enquiry and redressal of sexual harassment complaints.<br />
                Constitution:<br />
                a) The Company shall have an Internal Complaints Committee comprising of minimum three members.<br />
                b) The Internal Complaints Committee shall be constituted within 90 days of the adoption of this Policy, and thereafter maintained continuously with timely filling of vacancies.<br />
                c) The Internal Complaints Committee shall be chaired / presided by a woman in a senior most position/workplace from amongst employees. In case there is no senior enough woman officer available in the workplace, an eminent woman who may not be an employee of the Company, shall be co-opted as Chairperson for that case.<br />
                d) Not less than half of the members of the Internal Complaints Committee shall be women.<br />
                e) The members would be from amongst employees preferably committed to the cause of women or who have had experience in social work or have legal knowledge. They must be gender sensitive and compassionate individuals. They must be non-judgmental and tactful in their approach of handling such cases.<br />
                f) The ICC shall include one external member from an NGO, association committed to the cause of women, or a person with expertise in sexual harassment issues. This external member shall not be an employee of the Company and is a mandatory component of the ICC as per the Act.<br />
                g) Every Member of the Internal Complaints committee shall hold office for a period of three years, from the date of their nomination and shall be eligible for reappointment. The Member shall not hold office after he/she has completed two terms of three years each.<br />
                h) The Member appointed from amongst NGOs/associations shall be entitled to a fee or allowance of minimum of Rs.200/- (Rupees Two hundred only) per day for holding the proceedings of the Internal Complaints Committee and also the reimbursement of travel cost incurred, if any.<br />
                i) Any member of the Internal Complaints Committee if found guilty of contravening the provisions of the Act or found guilty in any other disciplinary proceedings, shall be removed from the Committee. Membership will also be terminated in the event of retirement or resignation of a member from the employment of the Company. A vacancy caused by the resignation or removal of member or by death or otherwise shall be filled by fresh nomination.<br />
                j) Changes in the constitution of the Internal Complaints Committee, whenever necessary, shall be made within 90 days of the date of vacancy of office by one of the members.<br />
                Role &amp; Powers:<br />
                a) The Internal Complaints Committee shall meet as and when the need arises and in any case once in a year, even if there is no live case, and review preparedness to fulfill all requirements of the Act in the Company.<br />
                b) The quorum for any meeting or inquiry of the Internal Complaints Committee shall be at least three members, as mandated under the Act, and shall include the Presiding Officer and the external member.<br />
                c) The minutes of every meeting shall be recorded in the Minutes Book maintained for the purpose.<br />
                The Internal Complaints Committee shall have power and jurisdiction for conducting an inquiry and also have the powers to –<br />
                a) Summon witnesses and documents;<br />
                b) Recommend transfer and/or suspension;<br />
                c) Recommend penalties as per Service Rules of the company.<br />
                d) Submit its Report to the Disciplinary Authority for further necessary action.<br />
                Meeting frequency of the committee:<br />
                Committee should meet within 7 working days of receiving the complaint. A minimum quorum of members out of which at least 2 need to be women and the external NGO representative is required to be present for the proceedings to take place.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">5. COMPLAINT REDRESSAL PROCESS WITH WHOM COMPLAINT CAN BE LODGED:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Any employee who has sufficient reason to believe that she is being sexually harassed directly or indirectly may submit a complaint of the alleged incident to any member of the Internal Committee in writing. The complaint must be made within 3 months of the incident. If the Complaint is against any member of the Committee, then to the Chairman of the Company.<br />
                Who can lodge the complaint<br />
                Any woman employee who is/was sexually harassed directly or indirectly may submit a complaint of the alleged incident to any Member of the Internal Complaints Committee in writing with her signature within a period of three months from the date of incident and in case of series of incidents, within a period of three months from the date of last incident. A complaint from another person can be registered with written consent from the victim. The Internal Complaints Committee will maintain a register to endorse the complaint received by it and keep the contents confidential, if it is so desired, except to use the same for discrete investigation.<br />
                Notice/Summons<br />
                Soon after registering a complaint, the Chairperson shall issue notice to the parties to the enquiry calling on them to appear before the Internal Complaints Committee on the date specified therein. Provided that no notice shall be issued calling on either party to appear for hearing on a date earlier than three days from the date of notice.<br />
                Conciliation<br />
                The Internal Complaints Committee may before initiating an inquiry, if requested by the complainant, take steps to settle the matter between the complainant and the respondent through conciliation, provided there is no monetary settlement made between the parties as a basis of conciliation. The Internal Complaints Committee will record the settlement, if arrived through conciliations, and forward the same to the Disciplinary Authority to take recommended action. Once the settlement is arrived through conciliations, no further inquiry shall be conducted by the Internal Complaints Committee.<br />
                Enquiry process<br />
                a. If the Internal Complaints Committee so desires, both parties can be heard separately.<br />
                b. If a third party has registered the complaint on behalf of the aggrieved employee and the aggrieved employee is not willing for a personal appearance before the Internal Complaints Committee due to any personal reason, the Internal Complaints Committee shall proceed with enquiry on the basis of prima facie evidence.<br />
                c. The Internal Complaints Committee shall prepare and hand over the Statement of Allegations to the person against whom complaint is made, within 15 days from the date of receipt of complaint and give the respondent an opportunity to submit a written explanation along with documents, if the respondent so desires, within 15 days of receipt of the same.<br />
                d. The complainant shall be provided with a copy of the written explanation submitted by the person against whom the complaint is made.<br />
                e. During the pendency of the inquiry, on a written request made by the aggrieved woman, the Internal Complaints Committee may recommend to the Disciplinary Authority for transfer of the aggrieved woman or the respondent to some other workplace; or grant leave to the aggrieved woman up to a period of three months; or grant any other relief to the aggrieved woman. The leave granted to the aggrieved woman under this Policy shall be in addition to the leave she would be otherwise entitled.<br />
                f. The complainant and the respondent may, if they so desire, shall communicate in writing to the Internal Complaints Committee the name and address of witness to whom they propose to call and give witness.<br />
                g. The complainant and the respondent shall, if they desire to tender any documents by way of evidence before the Committee, supply original copies of such documents, affixing their signatures on their respective documents to certify them to be the original copies.<br />
                h. The Internal Complaints Committee shall endeavor to call upon all witnesses mentioned by both the parties.<br />
                i. The Internal Complaints Committee shall provide every reasonable opportunity to the and to the person against whom complaint is made, for putting forward and defending their respective case.<br />
                j. The Internal Complaints Committee shall record the entire process of hearing duly signed by the parties to the enquiry as token of their acceptance to the record.<br />
                k. The Internal Complaints Committee is expected to complete the entire process of enquiry within a period of ninety (90) days from the date of complaint.<br />
                l. The Internal Complaints Committee shall communicate its findings and recommendations for action to the Disciplinary Authority within a period of ten (10) days from the date of completion of inquiry and such report shall be made available to the concerned parties. The report of the Internal Complaints Committee shall be treated as an enquiry report on the basis of which an employee can be awarded appropriate punishment.<br />
                m. In the event, the Internal Complaints Committee arrives at the conclusion that the allegation against the respondent has not been proved and the complaint does not fall under the purview of Sexual Harassment or the complaint does not mean an offence of Sexual Harassment, it shall recommend to the Disciplinary Authority that no action is required to be taken in the matter and the complaint would be dropped after recording the reasons thereof.<br />
                n. The documents pertaining to the investigation shall be maintained by the Human Resource Department and will be securely stored for future reference; if any.<br />
                Functional Heads, Managers<br />
                a. Provide appropriate working conditions in respect of work, leisure, health and ensure there is no hostile environment in the work place.<br />
                b. Report any complaint or grievance immediately to the concerned authorities.<br />
                c. Ensure there is no retaliation or retribution happening at the workplace where the supposed action is to have taken place.<br />
                d. Implement the disciplinary action along with HR.<br />
                e. Ensure that issues pertaining to sexual harassment are discussed periodically during the meetings.<br />
                During such meetings, relevant details such as the brief outline of this Policy, the details of the members of the Internal Complaints Committee shall also be discussed.<br />
                HR Department<br />
                a. Conduct necessary communication and training across the company, with respect to sexual harassment at the workplace.<br />
                b. Ensure this policy is communicated, explained and handed over at the time of induction of every employee.<br />
                c. Any act of sexual harassment to be notified as misconduct under this Policy.<br />
                d. Provide sufficient security at the entry as well as the exit points and in cases where women employees are transported from and to the work place working in late hours.<br />
                e. Clarify to employees on any queries related to this policy.<br />
                f. Maintain records of all the Sexual Harassment cases and findings.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">6. MIS AND REPORTING GUIDELINES:</h2>
            <p className="text-gray-700 mb-4 break-words">
                All investigations will be tracked and reported via a monthly dashboard to the management team. The Annual Report which the Complaints Committee shall prepare shall have the following details and will be shared with Chairman.<br />
                a. Number of complaints of sexual harassment received in the year;<br />
                b. Number of complaints disposed of during the year<br />
                c. Number of case pending for more than 90 days<br />
                d. Number of workshops or awareness programs against sexual harassment carried out;<br />
                e. Nature of action taken by the employer.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">7. MISCELLANEOUS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Policy or any clause of the Policy shall be amended if it is found necessary. The Company will ensure that victim or witnesses are not victimized or discriminated against while dealing with complaints of sexual harassment. The Policy is purely internal in nature and as such cognizance of any authority under any statute is always protected.
            </p>
        </div>
        </section>
    );
}
