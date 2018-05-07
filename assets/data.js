const db = {
    data: [
        {
            name: "Booklet & Keynotes",
            type: "linkList",
            cnt: [
                {
                    name: "Booklet",
                    link: "Booklet.pdf",
                },
                {
                    name: "Keynote Speech #1: Interdependencies and Fault Propagation in Cyber-Physical Systems",
                    link: "?page=sahra",
                    hover: "Sahra Sedigh Sarvestani",
                },
                {
                    name: "Keynote Speech #2: Parking with a Worm’s Brain",
                    link: "?page=radu",
                    hover: "Radu Grosu",
                },
            ]
        },
        {
            name: "Regular Papers",
            type: "linkList",
            cnt: [
                {
                    name: "Fast Write Operations in Non-Volatile Memories Using Latency Masking",
                    link: "Regular%20Papers/RTEST_2018_paper_1.pdf",
                    hover: "Ali Hoseinghorban, Mostafa Bazzaz, Alireza Ejlali"
                },
                {
                    name: "DrAx: An Automatic Approach to Designing More Precise and Energy-Efficient Approximate Adders",
                    link: "Regular%20Papers/RTEST_2018_paper_2.pdf",
                    hover: "Morteza Rezaalipour, Sarvenaz Tajasob, Masoud Dehyadegari, Mahdi Nazm Bojnordi"
                },
                {
                    name: "PCM-Oriented Cache Management Strategies for Solid-State Disks",
                    link: "Regular%20Papers/RTEST_2018_paper_3.pdf",
                    hover: "Hamed Farbeh, Nezam Rohbani"
                },
                {
                    name: "Optimizing Embedded Neural Networks Based on Saturated States",
                    link: "Regular%20Papers/RTEST_2018_paper_4.pdf",
                    hover: "Babak Djalaei, Mostafa E. Salehi"
                },
                {
                    name: "Towards Side Channel Secure Cyber-Physical Systems",
                    link: "Regular%20Papers/RTEST_2018_paper_5.pdf",
                    hover: "Marzieh AshrafiAmiri, Amir Hosein Afandizadeh Zargari, Seyed Mohammad-Hossein Farzam, Siavash Bayat-Sarmadi"
                },
                {
                    name: "Objective Function: A Key Contributor in Internet of Things Primitive Properties",
                    link: "Regular%20Papers/RTEST_2018_paper_6.pdf",
                    hover: "Bardia Safaei, Amir Mahdi Hosseini Monazzah†, Taha Shahroodi, and Alireza Ejlali"
                },
                {
                    name: "Resource Management and Control in Virtualized SDN Networks",
                    link: "Regular%20Papers/RTEST_2018_paper_7.pdf",
                    hover: "Simone Agliano`, Mohammad Ashjaei, Moris Behnam, Lucia Lo Bello"
                },
                {
                    name: "A Time-Predictable Fog-Integrated Cloud Framework: One Step Forward in the Deployment of a Smart Factory",
                    link: "Regular%20Papers/RTEST_2018_paper_8.pdf",
                    hover: "Hamid Reza Faragardi, Saeid Dehnavi, Mehdi Kargahi, Alessandro V. Papadopoulos, Thomas Nolte"
                },
                {
                    name: "A Framework for Reliable and Ubiquitous Inference in Wireless Sensor Network",
                    link: "Regular%20Papers/RTEST_2018_paper_9.pdf",
                    hover: "Abolhassan Shamsaie, Jafar Habibi, Erfan Abdi"
                },
                {
                    name: "Delayed LMS filters suppressing the RFI in cosmic rays radio detection",
                    link: "Regular%20Papers/RTEST_2018_paper_10.pdf",
                    hover: "Zbigniew Szadkowski, Anna Szadkowska"
                },
                {
                    name: "Performance Adaptation of Real-Time Control Tasks by Dynamic Scheduling: A Self-Triggered Control Approach",
                    link: "Regular%20Papers/RTEST_2018_paper_11.pdf",
                    hover: "Vahid Panahi, Mehdi Kargahi"
                },
                {
                    name: "Probabilistic Analysis of Self-Stabilizing Systems: A Case Study on a Mutual Exclusion Algorithm",
                    link: "Regular%20Papers/RTEST_2018_paper_12.pdf",
                    hover: "Mehran Alidoost Nia, Fathiyeh Faghih"
                },
                {
                    name: "Real-time Hardware-in-the-loop Test for a Small Upper Stage Embedded Control System",
                    link: "Regular%20Papers/RTEST_2018_paper_13.pdf",
                    hover: "Mehrdad Ghorbani, Milad Pasand, Alireza Ghasem Bayati, Neda Baheri"
                },
                {
                    name: "A Classifier-based Test Oracle for Embedded Software",
                    link: "Regular%20Papers/RTEST_2018_paper_14.pdf",
                    hover: "Farshad Gholami, Niousha Attar, Hassan Haghighi, Mojtaba Vahidi Asl, Meysam Valueian and Saina Mohamadyari"
                },
            ]
        },
        {
            name: "WiP Papers",
            type: "linkList",
            cnt: [
                {
                    name: "Semi-partitioned Scheduling Hard Real-time Periodic DAGs in Multicores",
                    link: "WiP%20Papers/Wip_3.pdf",
                    hover: "Mojtaba Hatami, Mahmoud Naghibzadeh"
                },
                {
                    name: "Accelerating Multicore Scheduling in ChronOS Using Concurrent Data Structures",
                    link: "WiP%20Papers/Wip-1.pdf",
                    hover: "Ali Behnoudfar, Mehdi Kargahi"
                },
                {
                    name: "Online Data-Driven Synchronization for IoT Systems with Unidirectional Networks",
                    link: "WiP%20Papers/Wip-2.pdf",
                    hover: "Seyed Hossein Hosseini Zahani, Mehdi Kargahi"
                },
                {
                    name: "Energy Debugging of Android Applications based on User Behavior",
                    link: "WiP%20Papers/Wip-4.pdf",
                    hover: "Boshra Taheri, Fathiyeh Faghih, Mehdi Kargahi"
                },
            ]
        },
        {
            name: "Organization",
            type: "twoLevelList",
            cnt: [
                {
                    title: "Steering Committee",
                    cnt:[
                        "Enrico Bini (University of Turin)",
                        "Alireza Ejlali (Sharif University of Technology)",
                        "Mehdi Kargahi (University of Tehran)",
                        "Ali Movaghar (Sharif University of Technology)",
                        "Lothar Thiele (ETH Zurich)",
                    ]
                },
                {
                    title: "General Chairs",
                    cnt:[
                        "Majid Nili Ahmadabadi (University of Tehran)",
                        "Ali Movaghar (Sharif University of Technology)",
                    ]
                },
                {
                    title: "Program Committee Chairs",
                    cnt:[
                        "Alireza Ejlali (Sharif University of Technology)",
                        "Mehdi Kargahi (University of Tehran)",
                    ]
                },
                {
                    title: "Work-in-Progress Chair",
                    cnt:[
                        "Marco Caccamo (University of Illinois at Urbana-Champaign)",
                    ]
                },
                {
                    title: "Program Committee Members",
                    cnt:[
                        "Alessandro Abate (University of Oxford)",
                        "Mohammad Abdollahi Azgomi (Iran University of Science and Technology)",
                        "Bashir Al-Hashemi (University of Southampton)",
                        "Farrokh Aminifar (University of Tehran)",
                        "Ebrahim Ardeshir Larijani (Institute for Research in Fundamental Sciences)",
                        "Mohammad Arjomand (Georgia Tech)",
                        "Hossein Asadi (Sharif University of Technology)",
                        "Akramul Azim (University of Ontario Institute of Technology)",
                        "Kambiz Badie (Iran Telecommunication Research Center)",
                        "Nader Bagherzadeh (University of California, Irvine)",
                        "Siavash Bayat-Sarmadi (Sharif University of Technology)",
                        "Marko Bertogna (University of Modena)",
                        "Enrico Bini (University of Turin)",
                        "Shahrokh Daijavad (IBM, Almaden Research Center)",
                        "Ali Ebnenasir (Michigan Technological University)",
                        "Alireza Ejlali (Sharif University of Technology)",
                        "Petru Eles (Linkoping University)",
                        "Mostafa Ersali-Nasab (University of Tehran)",
                        "Fathieh Faghih Khorasani (University of Tehran)",
                        "Reza Faraji-Dana (University of Tehran)",
                        "Mohammad Ghanbari (University of Essex)",
                        "Fatemeh Ghassemi (University of Tehran)",
                        "Radu Grosu (Technical University of Wien)",
                        "Ali R. Hurson (Missouri University of Science and Technology)",
                        "Amir-Hossein Jahangir (Sharif University of Technology)",
                        "Mehdi Kargahi (University of Tehran)",
                        "Ahmad Khonsari (University of Tehran)",
                        "Ramtin Khosravi (University of Tehran)",
                        "Farshad Khunjush (Shiraz University)",
                        "Christoph Kirsch (University of Salzburg)",
                        "Nasser Masoumi (University of Tehran)",
                        "Siamak Mohammadi (University of Tehran)",
                        "Amir Moradi (Ruhr University Bochum)",
                        "Ali Movaghar (Sharif University of Technology)",
                        "Babak Najar Araabi (University of Tehran)",
                        "Mitra Nasri (Max Planck Institute for Software Systems)",
                        "Vincent Nelis (CISTER Research Center, ISEP)",
                        "Dusit Niyato (Nanyang Technological University)",
                        "Hamid Noori (Ferdowsi University of Mashhad)",
                        "Hossein Pedram (Amir Kabir University of Technology)",
                        "Hamid Reza Rabiee (Sharif University of Technology)",
                        "Amir Rajabzadeh (University of Ottawa)",
                        "Mohammad Salehi (University of Guilan)",
                        "Yasser Sedaghat (Ferdowsi University of Mashhad)",
                        "Sahra Sedigh Sarvestani (Missouri University of Science and Technology)",
                        "Muhammad Shafique (Technical University of Wien)",
                        "Mohammad Shahidehpour (Illinois Institute of Technology)",
                        "Marjan Sirjani (Mälardalen University)",
                        "Ana Sokolova (University of Salzburg)",
                        "Ramin Tavakoli Kolagari (Nuremberg Institute of Technology)",
                        "Vladimir Terzija (The University of Manchester)",
                        "Wang Yi (Uppsala University)",
                        "Hamed Yousefi (University of Michigan)",
                        "Dakai Zhu (University of Texas at San Antonio)",
                    ]
                },
                {
                    title: "Organizing Committee",
                    cnt:[
                        "Fatemeh Ghassemi (University of Tehran)",
                        "Siamak Mohammadi (University of Tehran)",
                        "Marjan Sirjani (Mälardalen University)",
                        "Vahid Shah-Mansouri (University of Tehran)",
                        "Abbas Heydarnoori (Sharif University of Technology)",
                        "Mohammad-Ali Akhaee (University of Tehran)",
                        "Mehdi Tale Masouleh (University of Tehran)",
                        "Vahid Shah-Mansouri (University of Tehran)",
                        "Siavash Bayat-Sarmadi (Sharif University of Technology)",
                        "Maziar Sharbafi (University of Tehran)",
                        "Alireza Sadrossadat (University of Tehran)",
                        "Parastoo Bahadorani (University of Tehran)",
                    ]
                },
                {
                    title: "Student Executive Committee",
                    cnt:[
                        "Ehsan Nouri (University of Tehran)",
                        "Mohammad Ali Toufighi (University of Tehran)",
                        "Hossein Soltanloo (University of Tehran)",
                        "Hadi Safari (University of Tehran)",
                        "Emad Jabbar (University of Tehran)",
                        "Mohammad Hosein Moti Birjandi (University of Tehran)",
                        "Rouhollah Abolhasani (University of Tehran)",
                        "Sayed Mohammad Reza Tayaranian Hoseyni (University of Tehran)",
                        "Seyed Hossein Hosseini Zahani(University of Tehran)",
                        "Saeid Dehnavi (University of Tehran)",
                        "Pooria Allahkarami (University of Tehran)",
                        "Ehsan Asadollahi (University of Tehran)",
                    ]
                },
            ]
        },
    ],
    sahra: [
        {
            name: "Abstract",
            type: "text",
            cnt: [
                "In tightly coupled systems, a breach or malfunction can initiate a cascade that culminates in system-level failure. Identification of interdependencies among components or subsystems can facilitate prediction and mitigation of the effects of these failures. To this end, we discuss the application of statistical methods such as correlation or causation analysis to identification of functional dependencies in a cyber-physical system.",
            ]
        },
        {
            name: "Biography",
            type: "text",
            cnt: [
                "Dr. Sahra Sedigh Sarvestani is an Associate Professor of Electrical and Computer Engineering, a Research Investigator with the Intelligent Systems Center, and President of Faculty Senate at the Missouri University of Science and Technology. She received the B.S.E.E. degree from the Sharif University of Technology, and the M.S.E.E. and Ph.D. in electrical and computer engineering from Purdue University. Her current research centers on development and modeling of dependable networks and systems, with focus on critical infrastructure. Her projects include research on dependability of the electric power grid, large-scale water distribution networks, and transportation infrastructures. Her industry experience includes research and development of high availability mechanisms for the Cisco Internetwork Operating System. Her past and present research sponsors include the US and Missouri Departments of Transportation, the US Department of Education, the US National Security Agency, the US Army, the EU FP7 Program on Smart Monitoring of Historic Structures, and private industry. She is a Fellow of the National Academy of Engineering’s Frontiers of Engineering Education Program and held a Purdue Research Foundation Fellowship from 1996 to 2000. She is a Senior Member of the IEEE and a member of HKN and ACM.",
            ]
        },
    ],
    radu: [
        {
            name: "Abstract",
            type: "text",
            cnt: [
                "The recent success of deep neural networks (DNN) in unsupervised and supervised learning, in particular the success of DNN autoencoders, convolutional DNN, and recurrent DNN, have led to an unprecedented interest in DNN, and also to bold predictions of their role in taking over humanity and rendering us useless.",
                "However, DNN are considerably simplified, artificial models, that only capture the functional behaviour of the neurone’s synapses, and completely ignore the dynamic behaviour of the neurones themselves. If DNN were the key to learning and to intelligence, why did nature not create artificial instead of biological neurones? What are the advantages of biological neurones?",
                "In this talk, I show that biological neurones are very well suited to devise, or automatically learn sophisticated nonlinear controllers. We use a dynamic model that captures with decent precision, the behaviour of neurones and their synapses, in the C.elegans nematode. This model is powerful enough for designing or learning a parallel parking algorithm with just 39 neurones, where the role of each neurone is well understood. Moreover, the model turns out to be very robust, and easily extensible to tolerate faults. In fact, the neural model we use represents a Turing complete formalism, where parallel composition, and not sequential composition, is the norm.",
            ]
        },
        {
            name: "Biography",
            type: "text",
            cnt: [
                "Radu Grosu is a full Professor, and the Head of the Institute of Computer Engineering, at the Faculty of Informatics, of the Vienna University of Technology. Radu Grosu is also the Head of the Cyber-Physical-Systems Group within the Institute of Computer- Engineering, and a Research Professor at the Department of Computer Science, of the State University of New York at Stony Brook, USA.",
                "The research interests of Radu Grosu include the modeling, the analysis and the control of cyber-physical systems and of biological systems. The applications focus of Radu Grosu includes IoT, smart CPS (e.g. smart mobility, smart production, smart buildings, smart energy, smart farming, smart health-care), cardiac myocyte networks, neural networks, and genetic regulatory networks.",
                "Radu Grosu is the recipient of the National Science Foundation Career Award, the State University of New York Research Foundation Promising Inventor Award, and the Association for Computing Machinery Service Award. He is also an elected member of the International Federation for Information Processing, Working Group 2.2.",
                "Before receiving his appointment at the Vienna University of Technology, Radu Grosu was an Associate Professor in the Department of Computer Science, of the State University of New York at Stony Brook, where he co-directed the Concurrent-Systems Laboratory and co-founded the Systems-Biology Laboratory.",
                "Radu Grosu earned his doctorate (Dr.rer.nat.) in Computer Science from the Faculty of Informatics of the Technical University München, Germany. He was subsequently a Research Associate in the Department of Computer and Information Science, of the University of Pennsylvania, an Assistant, and an Associate Professor in the Department of Computer Science, of the State University of New York at Stony Brook, USA.",
            ]
        },
    ],
};