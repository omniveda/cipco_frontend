import React,{useState,useEffect} from 'react';

export default function WhistleBlowerPolicy() {
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
            <h1 className="text-3xl font-bold mb-4 break-words">WHISTLE BLOWER POLICY</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">1. OBJECTIVE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) The Company believes in the conduct of the affairs of its constituents in a fair and transparent manner by adopting highest standards of professionalism, honesty, integrity and ethical behaviour.<br />
                b) Towards this end, the Company has adopted the Cipco Limited Code of Business Conduct and Ethics called “Code of Conduct”, which lays down the principles and standards that should govern the actions of the Company and its employees. Any actual or potential violation of the Code, howsoever insignificant or perceived as such, would be a matter of serious concern for the Company.<br />
                c) Accordingly, this Whistle Blower Policy (“the Policy”) has been formulated with a view to provide a mechanism for employees of the Company to approach the Audit Committee of the Company and protected disclosure to the management instances of unethical behavior, actual or suspected fraud or violation of the Code of Conduct.<br />
                d) The Policy provides a framework to promote responsible and secure whistle blowing. It protects the Whistle Blower wishing to raise a concern about serious irregularities within the Company.<br />
                e) The Policy neither releases Whistle Blowers from their duty of confidentiality in the course of their work, nor is it to be misused to surface a grievance about a personnel work-related situation.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">2. APPLICABILITY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) This Policy is applicable to all Directors, Employees and other persons dealing with the Company.<br />
                b) The Protected Disclosure may be areas of concern in respect of the Company covered by this Policy and summarized in paragraph 5.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">3. DEFINITIONS:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>“Disciplinary Action” means any action that can be taken on the completion of / during the investigation proceedings, including but not limited to, a warning, recovery of financial losses incurred by the Company, suspension/ dismissal from the services of the Company or any such action as is deemed to be fit considering the gravity of the matter.</li>
                <li>“Employee” means every employee of the Company including the Directors in the whole time employment of the Company.</li>
                <li>“Protected Disclosure” means a concern raised by a written communication made in good faith that discloses or demonstrates information that may evidence unethical or improper activity (as described more particularly in Clause 5) with respect to the Company. Protected Disclosures should be factual and not speculative or in the nature of an interpretations/conclusion, and should contain as much specific information as possible to allow for proper assessment of the nature and extent of the concern and the urgency of a preliminary investigative procedure.</li>
                <li>“Subject” means a person against or in relation to whom a Protected Disclosure is made or evidence gathered during the course of an investigation.</li>
                <li>“Whistle Blower” means an Employee who makes a Protected Disclosure under this Policy.</li>
                <li>“Other persons” For the purpose of this Policy shall mean and include third-party stakeholders such as contractors, vendors, suppliers, consultants, and service providers engaged with the Company.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">4. THE GUIDING PRINCIPLES:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Company, as a policy, condemns any kind of discrimination, harassment, victimization or any other unfair employment practice being adopted against Whistle Blower. The Company will:<br />
                 Ensure that the Whistle Blower and/or the person processing the Protected Disclosure is/are not victimized for doing so;<br />
                 Treat victimization of Whistle Blower as a serious matter including initiating Disciplinary Action against person(s) causing or allowing victimization of Whistle Blower;<br />
                 Ensure complete confidentiality of identity of Whistle Blower;<br />
                 Not attempt to conceal evidence of the Protected Disclosure;<br />
                 Take Disciplinary Action for event covered under this Policy (as mentioned in Clause 5) or upon victimizing Whistle Blower or any person processing the Protected Disclosure or if any one destroys or conceals evidence of the Protected Disclosure made/to be made;<br />
                 Provide an opportunity of being heard to the persons involved especially to the Subject.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">5. COVERAGE OF POLICY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) The Policy covers malpractices and events which have taken place/ suspected to take place involving:<br />
                 An abuse of authority;<br />
                 Breach of employment contract;<br />
                 Manipulation of company data/records;<br />
                 Financial or compliance irregularities, including fraud, or suspected fraud;<br />
                 Criminal offence having repercussions on the company or its reputation;<br />
                 Pilferation of confidential/proprietary information;<br />
                 Deliberate violation of law/regulation;<br />
                 Misappropriation or misuse of Company funds/assets;<br />
                 Breach of Code of Conduct;<br />
                 An act of discrimination or sexual harassment;<br />
                 Any other unethical, imprudent deed/behaviour<br />
                The above list is only illustrative and should not be considered as exhaustive.<br />
                b) Policy should not be used as a route for raising malicious or unfounded allegations against colleagues.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">6. PROTECTION:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) No unfair treatment will be meted out to a Whistle Blower by virtue of his/ her having reported a Protected Disclosure under this Policy. The Audit Committee would be authorised to take steps to minimize difficulties, which the Whistle Blower may experience as a result of making the Protected Disclosure.<br />
                b) The identity of the Whistle Blower shall be kept confidential and shall be disclosed only on need to know basis.<br />
                c) Any other Employee assisting in the said investigation or furnishing evidence shall also be protected to the same extent as the Whistle Blower.<br />
                d) Protection to Whistle Blower under this Policy shall be available provided that Protected Disclosure is:<br />
                 made in good faith;<br />
                 the Whistle Blower has reasonable information or documents in support thereof; and<br />
                 not for personal gain or animosity against the Subject.<br />
                e) Whistle Blowers, who make any Protected Disclosures, which have been subsequently found to be mala fide, frivolous or malicious shall be liable to Disciplinary Action as may decided by the Audit Committee under this Policy.<br />
                f) Protection under this Policy would not mean protection from disciplinary action arising out of false or bogus allegations made by a Whistle Blower knowing it to be false or bogus or with a mala fide intention.<br />
                g) In respect of such Whistle Blowers, the Audit Committee would reserve its right to take/recommend appropriate disciplinary action.<br />
                h) If a Whistle Blower repeatedly makes mala fide, frivolous, baseless, or malicious Protected Disclosures, the Audit Committee may disqualify such individual from reporting further under this Policy. A record of such cases shall be maintained and appropriate disciplinary action may be initiated.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">7. PROTECTED DISCLOSURE:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) Direct Access to Audit Committee Chairperson:<br />
                In line with Section 177(9) of the Companies Act, 2013 and SEBI (LODR) Regulation 22, in “appropriate or exceptional cases” the Whistle Blower shall have direct access to the Chairperson of the Audit Committee.<br />
                Such cases may include (but are not limited to):<br />
                1. Where the Protected Disclosure concerns allegations against:<br />
                2. A member of the senior management (CEO, CFO, Company Secretary, functional heads, etc.),<br />
                3. A Director of the Company, or<br />
                4. A member of the Audit Committee.<br />
                b) Where the Whistle Blower believes that reporting through regular channels may result in evidence being destroyed, concealed, or tampered with.<br />
                c) Where there is a reasonable apprehension of victimization or retaliation if the concern is reported through the normal process.<br />
                In these cases, the Whistle Blower may directly send the disclosure to the Chairperson of the Audit Committee at the Company’s registered office, in a sealed envelope marked “Confidential – Direct Access.” The Chairperson shall ensure the matter is investigated promptly, independently, and fairly.<br />
                d) Protected Disclosures should be reported in writing so as to ensure a clear understanding of the issues raised and should either be typed or written in a legible handwriting.<br />
                e) The Protected Disclosure should be forwarded under a covering letter which shall bear the identity of the Whistle Blower. Anonymous disclosures may not be entertained.<br />
                f) While the Company encourages Whistle Blowers to disclose their identity to facilitate effective investigation, anonymous disclosures will not be outrightly rejected. Based on the seriousness and credibility of the issue raised, the Audit Committee may, at its discretion, investigate anonymous complaints on a case-by-case basis.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">8. INVESTIGATION:</h2>
            <p className="text-gray-700 mb-4 break-words">
                a) On receipt of Protected Disclosure, the Audit Committee shall appropriately and expeditiously investigate all whistle blower reports received. In this regard, the Audit Committee may perform all such acts as it may deem fit at its sole discretion. The investigation shall be completed normally within 30 days of the receipt of the Protected Disclosure.<br />
                b) The Audit Committee shall have right to outline a detailed procedure for an investigation and may delegate such powers and authorities, as it may deem fit to any officer of the Company for carrying out any investigation.<br />
                c) The identity of a Subject will be kept confidential to the extent possible given the legitimate needs of law and the investigation.<br />
                d) Subjects will normally be informed of the allegations at the outset of a formal investigation and have opportunities for providing their inputs during the investigation.<br />
                e) The Subject shall have a duty to co-operate with the investigator and responsibility not to interfere or obstruct with the investigation process. Evidence shall not be withheld, destroyed or tampered with, and witnesses shall not be influenced, coached, threatened or intimidated by the Subject. The Subject, if found indulging in any such actions then that will make the Subject liable for disciplinary actions.<br />
                f) A report shall be prepared after completion of investigation by the Officer(s) investigating the matter which shall be submitted to the Audit Committee. Upon receipt of report, the Audit Committee shall submit the same along with recommendations to the Chairman for Disciplinary Action after providing reasonable opportunity of being heard to the Subject. No allegation of wrongdoing against a Subject shall be considered as maintainable unless there is good evidence in support of the allegation.<br />
                g) In case the subject is the Audit Committee Chairman, then the protected disclosure is sent to the Chairman of the Board of Directors who will take necessary steps for the investigation.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">9. SECRECY/CONFIDENTIALITY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Whistle Blower, the Subject, the Senior Officer(s) and every one involved in the process shall:<br />
                 maintain complete confidentiality/ secrecy of the matter under this Policy;<br />
                 not discuss the matters under this Policy in any informal/social gatherings/ meetings;<br />
                 discuss only to the extent or with the persons required for the purpose of completing the process and investigations as directed by Audit Committee;<br />
                 not keep the papers unattended anywhere at any time;<br />
                 keep the electronic mails/files under password<br />
                If any one is found not complying with the above, he/ she shall be held liable for such Disciplinary Action as is considered fit by the Audit Committee as the case may be.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">10. RETENTION OF DOCUMENTS AND AMENDMENT:</h2>
            <p className="text-gray-700 mb-4 break-words">
                All Protected Disclosures, documented along with the results of Investigation relating thereto, shall be retained by the Company Secretary for a minimum period of 5 (five) years or as mentioned in applicable law, if any. This Policy may be amended from time to time by the Board on the recommendation of the Audit Committee.
            </p>
        </div>
        </section>
    );
}
