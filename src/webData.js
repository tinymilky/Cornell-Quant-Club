let webData = {
    "role": "In Cornell Quant We Trust",
    "name": "Cornell Quant Club ",
    "addr": "Cornell University",
    "email": "hz459@cornell.edu",
    "socialLinks":[
        // {
        //   "name":"linkedin",
        //   "url":"https://www.linkedin.com/in/y-yan",
        //   "className":"fa fa-linkedin"
        // },
        {
          "name":"github",
          "url":"https://github.com/yanym/Cornell-Club",
          "className":"fa fa-github"
        },
        // {
        //   "name":"ins",
        //   "url":"https://www.instagram.com/vency012/",
        //   "className":"fa fa-instagram"
        // }
      ],
    "mission":[
      {
        "specialization":"CornellQuant is an organization to encourage interdisciplinary research and engineering. We aim to provide a platform where we could communicate, learn the cutting-edge data science tech, and identify the key challenges as well as opportunities interdisciplinary areas. We wish to create an environment where our members can generate new ideas and be more creative not only in research but also in real-world applications. At present, we focus on machine /deep learning and optimization methods that could bridge that gap between quantitative analysis and industry applications. We regularly hold seminars organize discussions on these topics with professors in related fields and would raise interesting projects for members to get hands on experience."
      },
    ],
    "portfolio":[
      {
        "name": "Learning to understand the Dialogue during Juror Selection (Voir Dire)",
        "description": "[Hiring: theory and experiment]",
        "content": "Although the Supreme Court prohibits discrimination in peremptory challenges based on gender or race, given the fact that the attorneys are allowed to reject several juror candidates through the peremptory challenge without stating any reason, the question whether discrimination is truly eliminated in the voir dire process still remains. In the field of justice studies, it is found that a significant amount of minority jurors questioned if the system is racially fair. We combine statistical models with natural-language-processing techniques to unveil whether juror candidates of different races are faced with questions that are designed/worded differently. We aim to unfold how the interviewer's attitude evolves as the dialogue proceeds. The data are the dialogue transcripts from several serious criminal cases. Participants will be working closely with Yandong Li, under the supervision of Prof. Sumanta Basu and Prof. Martin Wells from the Department of Statistics and Data Science.",
        "imgurl":"CQ_images/c1.png",
        "url": "http://www.cornellquant.com"
      },
      {
        "name":"Automatic crypto-currency trading system",
        "description": "[Hiring: front-end, back-end and strategy]",
        "content":"Our automatic trading system consists of three parts, data-fetcher, simulator, and trading-bot. The data-fetcher, implemented in Node.js, fetches data from major crypto-currency exchanges, such as Huobi, Bitfenix, and OKEx and saves data in our data-server. The simulator, implemented in Python, allow us to test and evaluate our trading strategies on the data stored in the data-server. The trading-bot, also implemented in Node.js, generates orders and sends to crypto-currency exchanges.",
        "imgurl":"CQ_images/c2.gif",
        "url": "http://www.cornellquant.com"
      }
    ],
    "PastPortfolio":[
      {
        "name":"Variance-reduced Barzilai-Borwein step size for deep neural network training",
        "description":"",
        "content":"Direct calculation of the second order gradient, e.g. Newton’s method, is usually computationally expansive. This Barzilai-Borwein (BB) method can approximate the second order gradient with first order terms and therefore increases accuracy and decreases computational effort at the same time. However BB method is designed for batch gradient based method, applying to stochastic gradient scenario is challenging. We investigate stochastic BB method in deep learning and developed a variance-reduced BB method for efficient deep learning training.",
        "imgurl":"CQ_images/p1.png",
        "url": "http://www.cornellquant.com"
      },
      {
        "name":"Use matrix regression to forecast trading signals in the financial market",
        "description":"",
        "content":"Classical regression methods, such as lasso and elastic net, are designed for data in vector form. However, useful information may be veiled under the inherent correlations that can be studied only from matrix-formed data. For example, prices at different time and from different exchanges contains such correlation. Prices of different trading pairs at different time also accommodates another type of correlation. We seek for trading signals by processing matrix-form data. These signals may be ultimately used in practical arbitrage.",
        "imgurl":"CQ_images/p2.png",
        "url": "http://www.cornellquant.com"
      },
      {
        "name":"Use text-mining to analyze local governors’ altitude on climate change",
        "description":"",
        "content":"Global warming is a statistical fact that everyone is actually encountering. In this project, we have the actual audio transcript from the interview with several local governors in the New York State. We will use statistical method, such as natural language processing (NLP) techniques to inspect their statements and evaluate how well their preparations are and where their pressures come from, faced by the global warming. Participants will be collaborating tightly with Prof. Shawn Mankad at the Johnson Graduate School of Management.",  
        "imgurl":"CQ_images/p3.png",
        "url": "http://www.cornellquant.com"
      }
      // {
      //   "name":"Blaze: Simplified High Performance Cluster Computing",
      //   "description":"",
      //   "content":"MapReduce and its variants have significantly simplified and accelerated the process of developing parallel programs. However, most MapReduce implementations focus on data-intensive tasks while many real-world tasks are compute intensive and their data can fit distributedly into the memory. For these tasks, the speed of MapReduce programs can be much slower than those hand-optimized ones. We present Blaze, a C++ library that makes it easy to develop high performance parallel programs for such compute intensive tasks. At the core of Blaze is a highly-optimized in-memory MapReduce function, which has three main improvements over conventional MapReduce implementations: eager reduction, fast serialization, and special treatment for a small fixed key range. We also offer additional conveniences that make developing parallel programs similar to developing serial programs. These improvements make Blaze an easy-to-use cluster computing library that approaches the speed of hand-optimized parallel code. We apply Blaze to some common data mining tasks, including word frequency count, PageRank, k-means, expectation maximization (Gaussian mixture model), and k-nearest neighbors. Blaze outperforms Apache Spark by more than 10 times on average for these tasks, and the speed of Blaze scales almost linearly with the number of nodes. In addition, Blaze uses only the MapReduce function and 3 utility functions in its implementation while Spark uses almost 30 different parallel primitives in its official implementation.",
      //   "imgurl":"CQ_images/p1.png",
      //   "url": "http://www.cornellquant.com"
      // }
    ],
    "testimonials":[
      {
        "description":"Cornell Quant Club",
        "name":"Cornell University"
      },
      {
        "description":"Dreams begin here",
        "name":"Cornell Quant Club"
      }
    ]
  }
  
  export default webData