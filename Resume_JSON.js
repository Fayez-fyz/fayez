let obj =
[ 

        { 
             OBJECTIVE : "To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately"
        },

       { "EDUCATION_QUALIFICATION" :
            [
                { 
                    'DEGREE': "B.E (Computer science & engineering)",
                    "SCHOOL": 'AALIM MUHAMMAD SALEGH COLLEGE OF ENGINEERING, CHENNAI.',
                    'PERCENTAGE' : '6.5/10',
                    'BATCH': '2020'
                },
                {
                    'CLASS': "HSC",
                    "SCHOOL": 'KHADIR MOHIDEEN BOYS HIGHER SECONDARY SCHOOL, ADIRAMPATTINAM.',
                    'PERCENTAGE' : '73.3/100',
                    'BATCH': '2016'
     
                },
                {
                    'CLASS': "SSLC",
                    "SCHOOL": 'KHADIR MOHIDEEN BOYS HIGHER SECONDARY SCHOOL, ADIRAMPATTINAM.',
                    'PERCENTAGE' : '81.2/100',
                    'BATCH': '2014'
     
                }
            ]
        },
        {'PROJECTS':
          [
              {
                "GAMES DOWNLOAD WEBSITE (MINI PROJECT)":"I created website called Games Download Website. This is my ﬁrst project. I had used to create with HTML/CSS. This website is used for download paid and non- paid games for PC and Xbox and I embedded each game minimum requirement details and game trailers." 
              },
              {
                  'ANDROID PROJECT (MINI PROJECT)' : "I created application called CSEIAN. This application is mainly used for student and teacher can manage college related activities such that attendance, internal marks, exam results, circulars, assignments, homework and much more. There are two types of login one is teacher login another one is student login. In teacher login teacher can access read and write the details to all the students through this application. In student login student can access read only. This application given lot more experience to me."
              },
              {
                "PEOPLE DETECTION AND TRACKING USING IMAGE PROCESSING TECHINIQUE (FINALYEAR)" : "Normally, knowing the head counts of people and detection of people image can help in numerous ways for instance when a catastrophic outbreak occurs, in order to safe guard the life of people in the region of interest therefore. To detect and forecast the number of people. We need software and hardware with computational capacity this work suggest the implementation of SSD and MOBILENET architecture to detect people and ARIMA model to forecast the number of people visiting the region of interest we have suggested a system with low computational power system. It is also observed that the proposed system requires less computational power than the typical software core system. "
              }
          ]
        
        
        
        },
        {"ACHIEVEMNTS & AWARDS":
           ["I had done paper presentation called " +"Real time location tracking and safety protection for women"+ " in the international conference IIASE-2017",
            'I had participated in Smart India Hackathon at Software Edition (2018)',
            'I had participated for Ethical Hacking Workshop in IIT Madras (2018).',
            'I had completed HTML/CSS, Python, Java, Ethical Hacking, AWS Basic Course in Udemy',
            'I had participated for Web designing workshop in Aalim Muhammad Salegh college of engineering (2017)',
            'I had participated for soft skill training programme with 70% mark in Aalim Muhammad Salegh college of engineering (2018)',
            'I had participated for creative design 2D animation video editing and digital marketing in Aalim Muhammad Salegh college of engineering (2017)'

            ]

        },
        {'SOFTWARE SKILLS':
            [
            'HTML/CSS',
            'Javascript',
            'Python'
            ]

        },
        {'SKILLS' :
           [
               'Computer repair and maintenance',
               'Focus on work',
               'Team work'
           ]

        },
        {'PERSONAL DETAILS' :
            [
                {
                    'Father name' : 'Bismilla Khan'
                
                },
                {
                    'Date of Birth': '11.08.1998'
                },
                {
                    'Blood Group' : 'O+'
                },
                {
                    'Marital Status' : 'Single'
                }, 
                {
                    'Nationality' : 'Indian'
                },
                {
                    'Languages Known' : ['English','Tamil']
                }
            ]

        }      
]           

var data = JSON.parse(obj);
for( i in data){
    console.log(data[i]);
    

}


