import React,{useState,useEffect} from 'react';

export default function PolicyForPreservationOfDocumentsAndArchivalPolicy() {
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
            <h1 className="text-3xl font-bold mb-4 break-words">POLICY FOR PRESERVATION OF DOCUMENTS AND ARCHIVAL POLICY</h1>

            <h2 className="text-2xl font-semibold mb-2 break-words">1. BACKGROUND:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Pursuant to the Regulations 9 and 30(8) of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (as defined below), the Company is required to frame a “Policy for Preservation of Documents and Archival Policy”.<br />
                In this context, the Board of Directors has approved the “Policy for Preservation of Documents and Archival Policy (as defined below) at its meeting held on 8th September, 2025 with the objective of classifying the various information and documents filed with the stock exchange(s), record and register for the purpose of maintenance and preservation of such information and documents filed with the stock exchanges, identification of custodian to retain and preserve such records/ information/ documents along with the mode in which such records/ information/ documents will be maintained.<br />
                The Policy shall be applicable for preservation of documents/ records maintained by the management/ employees of the Company as per the respective statutory/ non statutory requirements either in (i) Physical mode; or (ii) Electronic Mode.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">2. OBJECTIVE OF THE POLICY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The objective of this Policy is to ensure that all the necessary documents and records of the Company are adequately protected and preserved for the time limit as per the statutory requirements and to ensure that the records of the Company which are no longer needed or which are not required to be maintained as per the statutory requirements or are of no value are discarded in proper manner, so that no one can have access to such discarded documents, after following the due process for discarding the documents.<br />
                This Policy also outline the framework for all the employees and top management to understand the roles and responsibilities towards retaining and preserving the documents and records. This Policy shall also outline the custodian of the documents and records and detail process to get the access of such documents.<br />
                This Policy shall provide the guidelines to classify the documents, records and registers of the Company which are required:<br />
                i. To be preserved permanently; and<br />
                ii. To be preserved for a period of not less than 8 years.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">3. SCOPE OF THE POLICY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                This Policy shall become applicable to all the departments of the Company by virtue of the approval by the Board of Directors of the Company. Each and every department of the Company, are required to maintain certain information, documents, registers and records either as per various statutory requirement in physical mode or in electronic mode. This Policy will ensure that the Company maintains the both electronic and physical documents as per various statutory requirements and shall be preserved with same degree of confidentiality and care.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">4. DEFINITION:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>“Act” means the Companies Act, 2013 and rules framed thereunder (including any statutory modification or amendment thereof);</li>
                <li>“Board” means the Board of Directors of Cipco Limited;</li>
                <li>“Company” means [Name of the Company] incorporated as per Companies Act, 2013;</li>
                <li>“Documents” means all the business records like registers, records, papers, agreements, notices, advertisements, requisitions, order, declarations, forms, show cause notice, minutes, replies, or any other records and registers to be maintained as per the statutory requirement or in order to comply with the requirements of any applicable law, whether required to be submitted to concerned authority or sent to government department or any associates, or otherwise, and records maintained in the electronic form received or kept pursuant to the Companies Act, 2013, or under any other applicable laws for time being in force or otherwise, maintained in physical or in electronic form.</li>
                <li>“Listing Regulations” or “LODR Regulations” means SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.</li>
                <li>“Stock Exchange(s)” means the stock exchange where the securities of the Company is listed.</li>
                <li>“Maintenance” means keeping documents, either physically or in Electronic form.</li>
                <li>“Preservation” means to keep the documents under the custody of authorised person, which shall prevent the documents from being altered, damaged or destroyed.</li>
                <li>“Policy” means this Policy for Preservation of Documents and Archival Policy</li>
            </ol>
            <p className="text-gray-700 mb-4 break-words">
                Any other term which are not defined herein shall have the same meaning as defined in the SEBI (LODR) Regulations, 2015, Companies Act, 2013, or any other applicable laws or regulations.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">5. PRESERVATION OF DOCUMENTS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                (a) Creation of documents:<br />
                Various documents are required to be filed as per the statutory requirements with the statutory authorities such as stock exchanges. Employees of the Company, in order to comply with the statutory requirements, may have to initiate and create number of documents and information. All employees are required to create accurate documents regarding their respective matters. The documents should:<br />
                i. facilitate proper scrutiny of the conduct of businesses by anyone authorised to undertake such scrutiny;<br />
                ii. protect the legal, financial and other rights of the Company, its clients, employees and any other connected person/ Company with the business of the Company;<br />
                iii. be confidential in nature and the confidentiality of such documents shall be maintained at all the time.
            </p>
            <p className="text-gray-700 mb-4 break-words">
                (b) Preservation of documents:<br />
                The Company shall preserve all the documents as per the requirements and provisions of the Companies Act, the Secretarial Standards, LODR Regulations, and any other law, rules, regulations as may be applicable to the Company from time to time.<br />
                Every employees and top management of the Company is responsible for making and keeping the documents as may be necessary to fully and accurately record the functions, activities, transactions and affairs of the Company. They must ensure that the documents once freezed in complete aspect, shall be tamper-free and no one shall have access to any confidential information of such documents. They must further ensure that the documents are handle with care and are preserved to avoid any damage before its prescribed time limit.
            </p>
            <p className="text-gray-700 mb-4 break-words">
                (c) Discarding the documents:<br />
                Documents are created and are maintained for certain time limits which is a statutory requirement and failure to adhere to such requirement of preservation of statutory documents shall attract penalty and fine on top management. In order to avoid any legal action, it is necessary for the Company to maintain all the statutory documents for the time limits as prescribed and to maintain the records of documents disposed of after meeting the statutory requirements of preserving such documents.<br />
                All the documents mentioned in “Annexure – I” need to be permanently preserved by the Company during its entire life time.<br />
                All documents mentioned in “Annexure – II” which is temporary in nature must be preserved for a period not less than 8 years or such other period as may be prescribed under any law for the time being in force and thereafter the records can be destroyed. The details of the Documents destroyed by the Company shall be recorded in the Register for Disposal of Records to be kept by employees who are disposing the Documents in the format prescribed at “Annexure – III”.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">6. CUSTODY OF THE DOCUMENTS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                Documents which are required to be maintained and preserved by the respective head of the departments are provided in the table entailed below. Following are the list of authorised person who shall act as the custodian of the documents:
            </p>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-400 px-4 py-2">Documents</th>
                        <th className="border border-gray-400 px-4 py-2">Authorised person / Custodian</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">1.</td>
                        <td className="border border-gray-400 px-4 py-2">Legal Files/ Documents</td>
                        <td className="border border-gray-400 px-4 py-2">Head - Legal department</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">2.</td>
                        <td className="border border-gray-400 px-4 py-2">Secretarial related documents</td>
                        <td className="border border-gray-400 px-4 py-2">Head – Secretarial Department</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">3.</td>
                        <td className="border border-gray-400 px-4 py-2">Tax / Accounting Records</td>
                        <td className="border border-gray-400 px-4 py-2">Chief Financial Officer</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">4.</td>
                        <td className="border border-gray-400 px-4 py-2">Employment / Personal data of employees</td>
                        <td className="border border-gray-400 px-4 py-2">Head – Human Resources department</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mb-2 break-words">7. ALIGNMENT WITH SEBI CIRCULARS:</h2>
            <p className="text-gray-700 mb-4 break-words">
                In case of any conflict between this Policy and any SEBI circulars, guidelines, or amendments to the LODR Regulations, the provisions of SEBI circulars/LODR amendments shall prevail over this Policy.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">ARCHIVAL POLICY</h2>
            <p className="text-gray-700 mb-4 break-words">
                Regulation 30(8) of the Listing Regulations requires the listed companies to disclose on its website all such events or information which has been disclosed to stock exchange(s) pursuant to the various provisions of the Listing Regulations, and such disclosures shall be hosted on the website of the Company for a period of minimum 5 (five) years and thereafter the same shall be moved to a designated “Archival Folder/Database” maintained by the Company, which shall remain accessible to investors/shareholders on request. This will strengthen transparency in line with Regulation 30(8). The purpose of the Policy is to disseminate equal, adequate and timely information to the shareholders through the website of the Company and to enable them to track the performance/ events of the Company over regular intervals of time and provide sufficient information to enable investors to access the current status of the Company.<br />
                The website of the Company shall be reviewed on regular intervals for ensuring that all the above mentioned disclosures are available on the website of the Company as required.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">ELECTRONIC SECURITY:</h2>
            <p className="text-gray-700 mb-4 break-words">
                The Company shall ensure that all electronic records are safeguarded through appropriate cybersecurity measures including, but not limited to, data encryption, restricted access on a need-to-know basis, multi-factor authentication for critical access, periodic system backups, and other security measures consistent with SEBI’s emphasis on electronic record integrity.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">POLICY REVIEW:</h2>
            <p className="text-gray-700 mb-4 break-words">
                This Policy shall be reviewed from time to time so that the Policy remains compliant with the applicable legal requirements. The Company Secretary will keep the Policy updated as per applicable statutory guidelines.<br />
                This Policy can be modified and/ or amended only with the approval of the Board of Directors.<br />
                Further, the Policy shall be mandatorily reviewed by the Board at least once every 3 (three) years to ensure its continued relevance and compliance with SEBI regulations and best practices.
            </p>

            <h2 className="text-2xl font-semibold mb-2 break-words">ANNEXURE – I: DOCUMENTS TO BE PRESERVED PERMANENTLY</h2>
            <p className="text-gray-700 mb-4 break-words">
                Following are the list of documents which shall be preserved permanently by the Company subject to the modifications, amendments, addition, deletion or any changes made therein from time to time:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Certificate of incorporation</li>
                <li>Certificate for commencement of business</li>
                <li>Memorandum and Articles of Association (along with the amended copies)</li>
                <li>Agreements made by the Company with Stock Exchanges, Depositories, etc.</li>
                <li>Minute Books of General Meetings, Board and Committee Meetings as per Companies Act, 2013 and Secretarial Standards</li>
                <li>All the registers and records as per Companies Act and LODR Regulations</li>
                <li>Such other records as may be required under any law from time to time</li>
                <li>Intellectual Property Documents shall include but shall not be limited to Copyrights, Trademarks, Patents, and Industrial Designs, Intellectual Property rights documents that are owned by the Company shall be retained by the Company permanently</li>
                <li>All the documents like agreements, application, stamp duty payment receipts for all the properties that are owned in the name of the Company</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">ANNEXURE – II: DOCUMENTS TO BE PRESERVED FOR EIGHT YEARS</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Instrument creating charge or modification (from the date of satisfaction of charge) as per Companies Act, 2013</li>
                <li>Annual Returns as per Companies Act, 2013</li>
                <li>Register of Deposits as per Companies Act, 2013</li>
                <li>Register of Allotment (from the date of each allotment) as per Companies Act, 2013</li>
                <li>Annual financial statements including Annual accounts, Directors report, -Auditors report</li>
                <li>Vouchers / Voucher register and books of accounts as defined under sub-section 13 of section 2 of the Companies Act, 2013</li>
                <li>Income Tax Returns filed under Income Tax Act, 1961</li>
                <li>All notices in form MBP – 1 received from Directors and KMPs along with any amendment thereto</li>
                <li>Return of declaration in respect of beneficial interest in any share as per Companies Act, 2013</li>
                <li>Copy of newspaper advertisement or publications</li>
                <li>Records relating to Court Cases / CBI Cases / Police Cases/ Civil Suits/ Labour Court Cases/ Arbitration Cases</li>
                <li>Compliance Reports received from any statutory authority</li>
                <li>Correspondences made with any statutory authority</li>
                <li>Register of Power of attorneys, if any</li>
                <li>Forms and returns filed with RBI/MCA or with any other statutory authority</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2 break-words">ANNEXURE – III: LOG BOOK (REGISTER OF DOCUMENTS DISPOSED OFF)</h2>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Date</th>
                        <th className="border border-gray-400 px-4 py-2">Mode of Destruction</th>
                        <th className="border border-gray-400 px-4 py-2">Particular of Documents</th>
                        <th className="border border-gray-400 px-4 py-2">Custodian of documents</th>
                        <th className="border border-gray-400 px-4 py-2">Signature of Authorized person</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
    );
}
