import { useState ,createContext} from "react"

export const Store=createContext()
function ContextStore(props){
    const[data,setData]=useState([
        {
            id:1,
            Category:"Bollywood",
            Description:"Varun Dhawan and Janhvi Kapoor's Bawaal was dubbed 'insensitive' and 'tone-deaf' for its references to Adolf Hitler and the Holocaust, the genocide of European Jews during the World War II. Now, when Varun was awarded Best Actor for the Nitesh Tiwari film at an event on Friday, netizens had a field day cracking jokes about the same.When a photo of Varun receiving the award was shared on the Reddit subgroup BollyBlindsNGossip, a netizen wrote, He has the audacity to go and accept it. I am never gonna watch a movie of his again after he doubled down defending this crap of a movie!!",
            heading:"'Bawaal' is worth watching for World War II history, especially the recreation of the holocaust, and Varun as well as Janhvi’s stellar performances.",
            image:"https://m.media-amazon.com/images/M/MV5BYWQ0NTE5NjUtZTQ5Mi00NWY0LTg3NDctNGI5NWIwNjdhYjA5XkEyXkFqcGdeQXVyMzcwMjU2NQ@@._V1_.jpg"

        },
        {
            id:2,
            Category:"Bollywood",
            Description:"Chandramukhi 2, directed by P Vasu and starring Raghava Lawrence and Kangana Ranaut in lead roles,is scheduled to hit theaters soon. However, as per latest reports, the horror-comedy will now be released at the end of this month. Industry tracker LetsCinema's tweet on Friday read However, the film's cast or makers are yet to react to the buzz around Chandramukhi 2 not releasing as per its initially planned date of September 19. Some on social media also suggested that the movie might not come about on its original release date due to the strong opening of Shah Rukh Khan's Jawan on September 7.",
            heading:"Kangana Ranaut's Chandramukhi 2 faces delay, release postponed to September 28: Report",
            image:"https://www.hindustantimes.com/ht-img/img/2023/06/30/1600x900/CHANDRAMUKHI_2_1688088178016_1688088178380.jpg"
        }  ,
        {
            id:3,
            Category:"Bollywood",
            Description:" An old video of Shah Rukh Khan signalling at an award show that he'd fly Nayanthara to Bollywood is going viral after the release of their film Jawan Shah Rukh Khan is a man of his word. As per an old video going viral now, the actor promised to fly The video now going viral is from a South award show from a few years ago. It sees Nayanthara reveal during an interaction on stage that she's a fan of Shah Rukh Khan. When Shah Rukh, who is sitting in the audience as a special guest, hears it, he signals that he'd fly Nayanthara down to Mumbai. ",
            heading:"When Shah Rukh Khan promised to fly Jawan co-star Nayanthara to Mumbai for her Bollywood debut and Atlee approved.",
            image:"https://s3.india.com/wp-content/uploads/2023/09/Jawan-Movie-Review-Shah-Rukh-Khans-Film-is-The-Big-Statement-he-Never-Made-in-The-Aryan-Khan-Case.jpeg"

        }    ,
        {
            id:4,
            Category:"Bollywood",
            Description:"Further, when asked how ‘Tamasha’ has left a mark on him both as an actor and audience, he replied, “As an actor, it inspires me to keep my inner child alive, never be mediocre, and to keep exploring myself. It also depicts separation, love, and unification beautifully. In an era of instant dating, ‘Tamasha’ really inspires you to wait for your true love and accept it the way it is.”As an audience it makes me think about a possible life that can be more beautiful and therefore ‘have that conversation with your boss,” he added.",
             heading:"Tamasha",
            image:"https://m.media-amazon.com/images/M/MV5BMjA1MTc0Mjc4Ml5BMl5BanBnXkFtZTgwNjU5Nzk4NjE@._V1_.jpg"
        }  ,
        {
            id:5,
            Category:"Bollywood",
            Description: "Actress Kriti Sanon, who is currently on cloud nine after winning the coveted National Award in the Best Actress category for her film Mimi, revealed in a recent interview about her career trajectory, having a plan B and also being humiliated by a choreographer in her early days in the industry. Talking to Curly Tales, the National Film awardee recalled an unpleasant experience at her first fashion show. The actor shared,My first ramp show, the choreographer, I have never worked with her again, she was very rude to me because I messed up the choreography. ",
            heading:"Kriti Sanon Recalls Crying After A Choreographer Scolded Her In Front Of 50 Models",
            image:"https://c.ndtvimg.com/2023-09/67b9onsg_priyanka-_625x300_04_September_23.jpg"
        }  ,
        {
            id:6,
            Category:"Bollywood",
            Description:"Shah Rukh tweeted, “Congratulations to Hon. PM @narendramodi ji for the success of India’s G20 Presidency and for fostering unity between nations for a better future for the people of the world. It has brought in a sense of honour and pride into the hearts of every Indian. Sir, under your leadership, we will prosper not in isolation but in Oneness. One Earth, One Family, One Future.”PM Modi formally closed the summit by passing on a ceremonial gavel to Brazilian President Luiz Inacio Lula da Silva. Brazil will take the bloc's presidency on December 1. ",
            heading:"Shah Rukh Khan congratulates PM Narendra Modi for G20 Summit: 'Under your leadership we will prosper…' ",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/10/550x309/shah_rukh_khan_1694349393087_1694349393377.jpg"
            },
          {
            id:7,
            Category:"Bollywood",
            Description:"Legendary singer Asha Bhosle celebrated her 90th birthday by performing at the 'Asha 90 Live Concert' in Dubai. Actor Jackie Shroff shared glimpses of the event on Instagram, expressing his gratitude for witnessing the magical performance Fans flooded the comment section with love and congratulation Asha Bhosle, known for her successful singing career spanning over eight decades, has received numerous awards and honors including the Dadasahed Phalke Award and the Padma Vibhusha Jackie Shroff, on the other hand, was last seen in the film ",
             heading:"Jackie Shroff feels blessed as he witnesses concert of Asha..",
            image:"https://static.toiimg.com/thumb/msid-103554541,imgsize-38368,width-400,resizemode-4/103554541.jpg"
         },
          {
            id:9,
            Category:"Bollywood",
            Description:"Pulkit Samrat, Varun Sharma, Manjot Singh and Pankaj Tripathi are back to take on Richa Chadha’s Bholi Punjaban — this time in a Delhi election — in the trailer of Furkey 3.Dropped by Excel Entertainment on Tuesday, the two-minute-51-second-long trailer starts with Pulkit’s Hunny and Varun’s Choochaa getting felicitated by their school. We then meet their friends and collaborators Lali (Manjot) and Pandit (Pankaj) as Choochaa gets another of his famous ‘Deja Chuuuus’.",
            heading:"Fukrey 3 trailer: Pankaj Tripathi, Richa Chadha, Pulkit Samrat, Varun Sharma and Manjot Singh are back with yet another laugh riot",
          image:"https://assets.telegraphindia.com/telegraph/2023/Sep/1693915211_fukrey-3-trailer.jpg"
          },
          {
            id:10,
            Category:"Bollywood",
            Description:"The Dream Girl 2 success bash was hosted at film producer Ekta Kapoor's Mumbai residence. She posed with the film's lead actors Ayushmann Khurrana and Ananya Panday at the red carpet. Ekta was dressed in a metallic outfit for the party. Ayushmann Khurrana and Ananya Panday's Dream Girl 2 continues to soar at the box office and has already grossed more than ₹100 crore worldwide. At the film's success party, Ananya chose to match Ayushmanna's Pooja ",
            heading:"Ayushmann Khurrana, Ananya Panday, Bhumi Pednekar, Sussanne Khan, Arslan Goni attend Dream Girl 2 success party",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/07/550x309/ekta_1694086094877_1694086095078.jpeg"
          }, {
            id:11,
            Category:"Bollywood",
            Description:"Janhvi Kapoor is a total stunner who is redefining fashion trends with her stunning looks. And if you don't believe us, then head over to her Insta-diaries, which are filled with the stylish looks of the actress, providing a treasure trove of fashion inspiration to all her fans.  ",
            heading:"Janhvi Kapoor adorns linen saree with unique drape, transforming into a living canvas of grace and beauty.",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/01/550x309/photo_2023-09-01_00-01-01_1693535145565_1693535149651.jpg"
          }, {
            id:12,
            Category:"Bollywood",
            Description:"Nora Fatehi posted pictures of herself in an elegant green silk saree and a purple plunge blouse. You should steal her traditional look for your wardrobe.Nora Fatehi is known for her experimental streak with her sartorial choices. The star never shies away from going bold and sultry while picking looks for her glamorous wardrobe. However, the star's traditional picks always win hr fans' hearts. The dancer and actor's latest photoshoots are proof. ",
            heading:"Nora Fatehi's elegant green silk saree, purple plunge blouse is a traditional look you should steal for your wardrobe",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/10/550x309/Nora_Fatehi_1694327681666_1694327688313.jpg"
          }, {
            id:13,
            Category:"Bollywood",
            Description:"After enchanting audiences and ruling over the box office, the Ranbir Kapoor and Alia Bhatt starrer 'Brahmastra is finally set for its OTT release.As per the latest reports, the Ayan Mukerji directorial has booked a November 4th release on a popular OTT platform. The fantasy film will debut on Disney+ Hotstar at 12 AM.The exciting update comes after the makers dropped ticket prices to around Rs 100 to ensure many more moviegoers got achance to watch the stunning VFX on the big screen.",
             heading:"Ranbir Kapoor and Alia Bhatt's 'Brahmastra' set for November4",
             image:"https://static.toiimg.com/thumb/msid-95001807,width-1280,resizemode-4/95001807.jpg"
          }, {
            id:14,
            Category:"Bollywood",
            Description:"I really wanted to love The Family Man. Raj and DK are always at the cusp of the next big thing, except in the case of Stree, the sleeper hit of 2018 that they wrote, which is a bonafide success. There's Go Goa Gone, which introduced Indians to a new kind of comedy, and is their best work according to me. There Shor in the City, the quintessential underdog film — I can't find one person who hated it. There's A Gentleman",
            heading:"The Family Man review: An uneven, lengthy series held together by Manoj Bajpayee and earnest intent",
            image:"https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg"
          }, {
            id:15,
            Category:"Hollywood",
            Description:"Heart of Stone was Alia Bhatt’s much-anticipated first Hollywood outing. The film which also featured Gal Gadot and Jamir Dornan.",
            
            heading:"Heart of Stone",
            image:"https://i0.wp.com/www.the36vibes.com/wp-content/uploads/2023/08/WAPK4B1la0B.webp?fit=720%2C1080&ssl=1"
          }, {
            id:16,
            Category:"Hollywood",
            Description:"The listing has been made very quietly without advertisments. And George Clooney is looking for prospective buyers with high net worth.Hollywood star George Clooney has put his famous Lake Como bachelor villa in Northern Italy for sale at a whopping $107 million, according to a report by Page Six. As per the report, the listing has been made very quietly without advertisments. ",
            heading:"$107 million sale: George Clooney puts huge price tag on his Lake Como villa in Italy",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/08/550x309/george_clooney_amal_clooney_1670313774309_1694163326769.jpg"
          }, {
            id:17,
            Category:"Hollywood",
            Description:"Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. ",
            heading:"Alice in Wonderland",
            image:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F4BD6991B21975E4A57D6385120C5E7BEE5B04CA54AB3DC9847B5CB661D9D306/scale?width=1200&aspectRatio=1.78&format=jpeg"
          }, {
            id:18,
            Category:"Hollywood",
            Description:"Lilly Collins shared her lovely wedding pics along with a sweet note for husband Charlie McDowell on their second wedding anniversary.British-American actor Lily Collins is celebrating life with her husband and American film director Charlie McDowell. On Monday, the Emily in Paris star.",
            heading:"Lily Collins pens note on 2nd wedding anniversary with Charlie McDowell: ‘Thank you for being the greatest partner’",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/05/550x309/lilly_collins_1693877201507_1693877201884.jpg"
          }, {
            id:19,
            Category:"Hollywood",
            Description:"Their attendance at Beyonce's concert has seemingly put to rest breakup rumours about their relationship.Kylie Jenner and Timothée Chalamet were spotted hanging out together at Beyonce's concert at Inglewood's SoFi Stadium in Los Angeles on Monday, September 4, 2023.A video of the couple went viral on social media in which Chalamet is seen smoking a cigaratte while speaking to Jenner. ",
            heading:"‘Oh so this is a real…’: Fans react to Kylie Jenner and Timothée Chalamet hanging out together at Beyonce's concert",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/05/550x309/Kylie_and_Tim_1680953444556_1693911826494.png"
          }, {
            id:20,
            Category:"Hollywood",
            Description:"Amber Heard, is seen using crutches due to a hip injury from marathon training, appears relaxed in Madrid as she discusses her new life and upcoming projects. In photos obtained exclusively by Page Six, actress Amber Heard was spotted returning to her Madrid residence with the aid of crutches. She attributed her need for crutches to a hip injury she faced during her training for the NYC Marathon.",
            heading:"Amber Heard spotted with crutches in Madrid ahead of her training injury for the NYC marathon",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/02/550x309/Amber_Heard_1687658903817_1693623703346.jpg"
          }, {
            id:21,
            Category:"Hollywood",
            Description:"Dora and the Lost City of Gold is a 2019 American adventure comedy film directed by James Bobin. It is a live-action adaptation of the Nick Jr. animated television series Dora the Explorer as well as the Nickelodeon animated series Dora and Friends. The film stars Isabela Moner, Eugenio Derbez, Michael Peña, Eva Longoria, with Danny Trejo as the voice of Boots.",
            heading:"Dora and the Lost City of Gold",
            image:"https://flxt.tmsimg.com/assets/p16536345_v_h8_ad.jpg"
          }, {
            id:22,
            Category:"Hollywood",
            Description:"Jennifer Garner will star in a new body-swap comedy called Family Switch. It will be released on Netflix on November 30th.Jennifer Garner will star in a new body-swap movie called Family Switch. Netflix shared a sneak peek of the comedy co-starring Ed Helms and Emma Mye. ",
            heading:"Netflix reveals first look at Jennifer Garner Body-Swap comedy Family Switch",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/29/550x309/F4oNmLHWwAEn13__1693305129435_1693305141172.jfif"
          }, {
            id:23,
            Category:"Hollywood",
            Description:"Barbie and her family are embarking on a Tiki-themed, eco-friendly cruise at the start of BARBIE & CHELSEA: THE LOST BIRTHDAY. Barbie's mom is there to work and her dad is looking forward to some rest, so they put Barbie in charge of her three younger sisters: Skipper, Stacie, and the youngest, Chelsea. ",
            heading:"The Lord of the Rings",
            image:"https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg"
          }, {
            id:24,
            Category:"Hollywood",
            Description:"The Afterparty Season 2 Episode 9, title  Isabel,will focus on Isabel's backstory and her life after her husband's death. It will be released on August 30 The Afterparty is a series about a murder investigation at a wedding. The second season will be released on Apple TV+ on August 30, 2023. Episode 9, titled Isabel, will focus on the character of Isabel, played by Elizabeth Perkins. ",
            heading:"The Afterparty season 2 episode 9: Release date, air time, and more details explored",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/29/550x309/Apple_TV_The_Afterparty_key_art_16_9_1693327073667_1693327081118.webp"
          }, {
            id:25,
            Category:"Hollywood",
            Description:"Harry Potter and the Goblet of Fire is a 2005 fantasy film directed by Mike Newell from a screenplay by Steve Kloves, based on the 2000 novel of the same name by J.K. Rowling. It is the sequel to Harry Potter and the Prisoner of Azkaban (2004) and the fourth instalment in the Harry Potter film series.",
            heading:"Harry Potter and the Goblet of Fire ",
            image:"https://flxt.tmsimg.com/assets/p90599_p_v8_aq.jpg"
          },
           {
            id:26,
            Category:"Hollywood",
            Description:"The Killer trailer reaction: David Fincher's adaptation of Alexis Nolent’s French graphic novel series also sees him team up with writer Andrew Kevin Walker.David Fincher is back to the thriller genre with his next, The Killer. Netflix dropped the high-octane teaser trailer of the neo-noir on Tuesday ",
            heading:"The Killer teaser reaction: Fans can't wait to see David Fincher back in form, say 'every frame is perfect'",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/30/550x309/the-killer_1693372739031_1693372739357.jpg" 
          },
          {
            id:27,
            Category:"Hollywood",
            Description:"The trailer for the fifth and final season of Star Trek Disovery has been released at San Diego Comic Con and on Star Trek's website. The trailer shows Captain Burnham pursuing enemies via warp speed and space exploration while facing an ancient evil. The captain has to work with other characters despite their various conflicts and work towards the same goal. ",
            heading:"U.S.S. Discovery embarks on final journey in new 'Star Trek Discovery' Season 5 trailer",
            image:"https://static.toiimg.com/thumb/msid-102057804,imgsize-34464,width-400,resizemode-4/102057804.jpg"
          },
          {
            id:28,
            Category:"Hollywood",
            Description:"Once Upon a Time...in Hollywood is a 2019 comedy-drama film written and directed by Quentin Tarantino. Produced by Columbia Pictures, Bona Film Group, Heyday Films, and Visiona Romantica and distributed by Sony Pictures Releasing, it is a co-production between the United States, United Kingdom, and China. It features a large ensemble cast led by Leonardo DiCaprio, Brad Pitt, and Margot Robbie. ",
            heading:"Once Upon a Time... in Hollywood",
            image:"https://readwatchdrinkcoffee.files.wordpress.com/2019/09/once-upon-a-time.jpg?w=1131"
          },
          {
            id:29,
            Category:"Food",
            Description:"Dosa is the ever-popular South Indian breakfast of crispy crepes made with ground rice and lentil batter that is fermented. With just a handful of ingredients learn to make the classic Dosa recipe from scratch with my easy video and step-by-step photos. I also cover making your own dosa batter in a blender or mixer-grinder, tips on fermentation and cooking dosa to help you make the best dosa – crispy, soft and so good to dunk in a bowl of Coconut Chutney or piping hot Sambar.",
            heading:"Dosa",
            image:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg"
 },
          {
            id:30,
            Category:"Food",
            Description:"Momo is a type of steamed filled dumpling in Tibetan and Nepali cuisine .Momo is a type of steamed filled dumpling in Tibetan and Nepali cuisine that is also popular in neighbouring Bhutan and India. Momo is usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines. It can also be cooked as soup versions known as jhol momo where the broth is made from achar using a mixture of tomatoes, sesame seeds, chillies, cumin and coriander or mokthuk from boiling pork/buffalo bones mixed with various herbs and vegetables",
            heading:"MOMO",
            image:"https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/4.jpg?tr=w-3840,q-50"
          },
          {
            id:31,
            Category:"Food",
            Description:"Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. Noodles are a staple food in many cultures (for example, Chinese noodles, Filipino noodles, Indonesian noodles, Japanese noodles, Korean noodles, Vietnamese noodles, and long and medium length Italian pasta) and made into a variety of shapes.While long, thin strips may be the most common, many varieties of noodles are cut into waves, helices, tubes, strings, or shells, or folded over, or cut into other shapes. Noodles are usually cooked in boiling water",
            heading:"Noodles",
            image:"https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/about_us/2.jpg?tr=w-1920"
          },
          {
            id:32,
            Category:"Food",
            Description:"You will fall in love with this Chocolate Lava Cake recipe with its rich molten chocolate center! Ready in less than 30 minutes, this decadent dessert is sure to impress and is perfect for any occasion. All you need are a handful of simple ingredients, and you’ll have this rich and fudgy chocolate treat in no time.They are the perfect individual desserts that are purposefully slightly undercooked, resulting in a gooey and melty chocolate center that oozes out when you cut into it.",
            heading:"Easy chocolate molten cakes",
            image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg"
          },
          {
            id:33,
            Category:"Food",
            Description:"Dal Makhani is the absolute favorite recipe that can easily be cooked to the perfection at home. First created by Sardar Singh, Dal Makhani has now become the quintessential Indian dish with so many variations found in different regions of our country as well as abroad.",
            heading:"Dal Makhani Recipe",
            image:"https://c.ndtvimg.com/2020-09/u6aa8l8_dal-makhani_625x300_21_September_20.jpg"
          },
          {
            id:34,
            Category:"Food",
            Description:"Bhelpuri is a savoury snack originally from India, and is also a type of chaat. It is made of puffed rice, vegetables and a tangy tamarind sauce, and has a crunchy texture.Bhel is often identified as a 'beach snack', strongly associated with the beaches of Mumbai, such as Chowpatty or Juhu.[3] One theory for its origin is that it was invented at a restaurant called Vithal near Victoria Terminus.",
            heading:"Bhel puri",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Indian_cuisine-Chaat-Bhelpuri-03.jpg/1200px-Indian_cuisine-Chaat-Bhelpuri-03.jpg"
          },
          {
            id:35,
            Category:"Food",
            Description:"A doughnut  is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors. Doughnut is the traditional spelling, while donut is the simplified version; the terms are used interchangeably.Doughnuts are usually deep fried from a flour dough, but other types of batters can also be used.",
            heading:"Donuts",
            image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          },
          {
            id:36,
            Category:"Food",
            Description:"This is a healthy roti that is made of wholewheat flour and is a great option for breakfast paired with your favourite sabji. Tandoori roti is a flat bread which originated in the India. Roti is the main staple food for many states in North India and Tandoori Roti is a much loved variety. Other famous varieties are parantha, kulcha, Lachha parantha, and plain roti recipe. Tandoori roti is made on the tandoor which gives it a crispy delicious texture. ",
            heading:"Tandoori roti",
            image:"https://wikiluv.net/wp-content/uploads/2021/07/Screenshot_20210727-221039-539.png"
          },
          {
            id:37,
            Category:"Food",
            Description:"Khaman dhokla or simply khaman is an instant version steamed snack. Light, spongy and soft Gujarati Farsaan is a popular snack across India.Though I have named this as Dhokla commonly we know, in Gujarati households, Dhokla is something they make with fermented batter andcream in colour. This is called khaman, where we make it with besan and the instant version.Very few people outside Gujarat know this difference. Also, khaman since instant version uses cooking soda giving it lighter texture.",
            heading:"Dhokla",
            image:"https://im.rediff.com/getahead/2020/apr/06breakfast-recipe4.jpg?w=670&h=900"
          },
          {
            id:38,
            Category:"Food",
            Description:"A hamburger is a popular meal made by placing a grilled ground beef patty inside a bun.  The origins of the hamburger are hotly debated, with conflicting claims made by Wisconsin; Hamburg, Germany; Hamburg, New York; and Athens, Texas, among others. Regardless, it is quite certain that hamburgers have been around since the late nineteenth century.A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.  ",
            heading:" Burgers",
            image:"https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
          },
          {
            id:39,
            Category:"Food",
            Description:"India's first Gourmet Iconic Sundaes range is loaded with high-quality ice cream, dry fruits, and rich flavors. With rich in taste and delicious flavors, you will have a memory that lasts forever! It tastes so good that you will find it hard to stop eating it 🍨 ",
            heading:"Gourmet Sundaes",
          image:"https://www.pjponline.com/wp-content/uploads/2019/02/shutterstock_642632641.jpg"
          },
          {
            id:40,
            Category:"Food",
            Description:"Keto paneer tikka is a part of the vegetarian diet and can help you lose weight fast. It is one of the easiest Keto Indian recipes if you are looking for low carb Indian vegetarian recipes. Paneer belongs to the category of foods that are high in fat, low in protein and sugar with very few carbs.It's the latest diet trend these days, but quite difficult to adopt.  ",
            heading:"KETO PANEER TIKKA",
            image:"https://i.ytimg.com/vi/2oTV2s-nPwg/maxresdefault.jpg"
          },
          {
            id:41,
            Category:"Food",
            Description:"  frozen desserts contain primary ingredients such as milk or milk solids, sugar, ice crystals and air .frozen desserts comprise a category of food products that are characterized by being a sweet emulsion that is whipped, frozen and consumed in the frozen state. Formulations consist of sources of fat, protein, sweeteners, stabilizers, emulsifiers and water.",
            heading:"Frozen Dessert",
            image:"https://www.ingredion.com/content/dam/ingredion/other/us/colorblock-images/Solids-Replacement-Icecream-720x560.jpg"
          },
          {
            id:42,
            Category:"Food",
            Description:"Green juice is all the rage these days, and for good reason.‘Greens’ are a great source of fiber, antioxidants, nutrients, minerals, folate, Vitamin C, and potassium.  They can help to reduce inflammation, build up your body’s immune system, and they’re even good for your skin.  Of course, what you get out of it will depend on what you put into it. ",
            heading:"Juice",
            image:"https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Refreshing-Fruit-Juices-In-Tall-Glasses-683x1024.jpg"
          },
          {
            id:43,
            Category:"Food",
            Description:"Manchurian is a popular Indian dish hugely influenced and adapted from Chinese cooking. It usually consists of deep-fried battered  cooked in soy sauce-based gravy. Vegetarian varieties use vegetables like cauliflower, carrots, or cabbage to replace the meat.We will use cabbage to make our Manchurian balls in this recipe and then add them to the fried rice. Fragrant and hearty, this veg Manchurian fried rice features crispy Manchurian balls and rice cooked in a savory, rich sauce. ",
            heading:"Manchurian and fried rice bowl",
            image:"https://img-global.cpcdn.com/recipes/fb236d85702e5670/400x400cq70/photo.jpg"
          },
          {
            id:44,
            Category:"Technology",
            Description:"A new star has struck at the roots of scientists's previous understanding of star formation processes by showing signs of having formed through the combination of two different processes earlier thought to occur in different astrophysical environments.   ",
             heading:"Bengaluru scientists discover new star",
            image:"https://static.toiimg.com/thumb/msid-102708816,imgsize-496897,width-400,resizemode-4/102708816.jpg"
          },
          {
            id:45,
            Category:"Technology",
            Description:"Digital transformation is no longer a luxury. It has become  a necessity for companies to remain competitive and relevant in their respective industries. ",
            heading:"Embrace the digital revolution with ISB Digital Transformation", 
            image:"https://static.toiimg.com/thumb/msid-100766535,imgsize-40784,width-400,resizemode-4/100766535.jpg"
          },
          {
            id:46,
            Category:"Technology",
            Description:"With the ever-changing smartphone technology, it's the innovation that truly distinguishes the product. Samsung has always been at the forefront of innovation, unveiling the prime technology of the current times. Its latest next-gen foldable smartphones,the Galaxy Z Fold5 & Galaxy Z Flip5, are a testament to the fact that Samsung is way ahead of its competitors in terms of innovation, design, style, functionality etc. ",
            heading:"The future of smartphones is finally here! Own the next-gen Galaxy Z Flip5 and Galaxy Z Fold5 and unfold your world like never before",
            image:"https://static.toiimg.com/thumb/msid-103166060,imgsize-51234,width-400,resizemode-4/103166060.jpg"
          },
          {
            id:47,
            Category:"Technology",
            Description:"Recently, WhatsApp has rolled out multiple new features which claim to improve the user experience. Now a new online report suggests that the Meta-owned platform is rolling out a new feature.",
            heading:"How WhatsApp may solve one of your biggest problem while forwarding messages",
           image:"https://static.toiimg.com/thumb/msid-103568302,imgsize-253559,width-400,resizemode-4/103568302.jpg"
          },
          {
            id:48,
            Category:"Technology",
            Description:"As students worldwide prepare to return to their schools and colleges Kaspersky's team of cybersecurity experts has uncovered a significant increase in fraudulent activities. The report notes that scammers are preying on the frenzy surrounding academic preparations and purchases and cybercriminals launch sophisticated phishing campaigns targeting students, educators, and administrators alike.One of the scamming tactics employed by fraudsters is the creation of fake giveaways promising students a chance to win a laptop.",
            heading:"New scam activities targeting students increase worldwide: Report",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103585180,imgsize-81816,width-720/103585180.jpg"
          },
          {
            id:49,
            Category:"Technology",
            Description:"The country’s apex court – Supreme Court (SC) – has dismissed a PIL filed urging the central government to discontinue relief provided to telecom companies. In September 2021, the government announced grant relief to the stressed telecom sector from paying statutory dues. A PIL was filed against this decision, seeking cancellation of the grant. According to a report by PTI, in its ruling the SC said that these are all matters of policy and decision-making is done based on experts' opinion. ",
            heading:"Supreme Court has ‘good news’ for telecom companies",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103584016,imgsize-162396,width-720/103584016.jpg"
          },
          {
            id:51,
            Category:"Technology",
            Description:"Facebook parent company Meta is reportedly working on a new artificial intelligence (AI) system that could be as powerful as the most advanced large language model (LLM) offered by OpenAI, a report has claimed.The Microsoft-backed company currently offers GPT-4 LLM that powers the ChatGPT and is available as a part of ChatGPT Plus subscription. The same technology also powers Microsoft’s Copilot AI that the company has incorporated in its products and services, including Windows 11.",
            heading:"How Facebook’s new AI system may be ‘good news’ for Nvidia",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103579789,imgsize-12345,width-720/103579789.jpg"
          },
          {
            id:52,
            Category:"Technology",
            Description:"Amidst tensions between Beijing and Washington, China has decided to expand its ban on using iPhones in sensitive departments to government-backed agencies and state companies. Sources familiar with the matter told Bloomberg that several agencies have already instructed their staff not to bring iPhones to work, confirming an earlier report by the Wall Street Journal. The Chinese government plans to further extend this restriction to a number of state-owned enterprises and other government-controlled organisations.",
            heading:"China’s ban on iPhone for government officials ‘hurts’ Apple",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103512126,imgsize-92758,width-720/103512126.jpg"
          },
          {
            id:53,
            Category:"Technology",
            Description:"Japan has launched the X-ray Imaging and Spectroscopy Mission (XRISM) and the Smart Lander for Investigating Moon (SLIM) in a bid to become the world's fifth country to land on the moon early next year. The lunar exploration spacecraft was launched aboard a homegrown H-IIA rocket.Japan Aerospace Exploration Agency (JAXA) said the rocket took off from Tanegashima Space Center in southern Japan. XRISM was successfully separated from the launch vehicle at about 14 minutes and 9 seconds after lauch.",
            heading:"Japan launches lunar mission, may become fifth country to land on the Moon",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103471965,imgsize-285956,width-720/103471965.jpg"
          },
          {
            id:54,
            Category:"Technology",
            Description:"AI-generated content is almost everywhere now. Companies like Google, Microsoft among others have AI tools that can generate text, images, video, audio, and much more. Keeping in mind, the potential misuse of AI-generated content, Google has made changes to its political content policy. Starting in November, Google will require election advertisers to put a disclaimer.",
            heading:"Google wants political parties to put AI disclaimer in videos",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103463533,imgsize-12345,width-720/103463533.jpg"
          },
          {
            id:55,
            Category:"Technology",
            Description:"More than 102.8 million cyberattacks targeted users in India in the second quarter of 2023 (Q2 2023), a report has said, noting that cybercrime cartels and evil hackers continue to evolve by targeting unsecured systems.",
            heading:"Over 100 million Indians targeted by hackers as users in this city hit the most",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103396513,imgsize-67044,width-720/103396513.jpg"
          },
          {
            id:56,
            Category:"Technology",
            Description:"India's technology industry is reportedly decentralising. According to a recent report by Deloitte and Nasscom, the country's IT sector is moving from the current seven major hubs -- Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad and Pune. Presently, the majority of the 5.4 million people employed in the technology industry in India have clustered around these seven major cities, the report stated. The 220-page report is titled Emerging technology hubs of India. ",
            heading:"Indian IT industry is moving to new cities from 7 major hubs, claims report",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103397812,imgsize-217714,width-720/103397812.jpg"
          },
          {
            id:57,
            Category:"Technology",
            Description:"In a pioneering two-week mission that captured international attention, India's Chandrayaan-3's lander Vikram and its rover Pragyan have gone into sleep mode, facing the unyielding cold of the moon's south pole region. As they await the next lunar dawn, their survival is a matter of luck, as reported by Space.com.Why you ask? On Earth, temperatures in Antarctica can plunge, but nothing compares to the -424°F (-253°C or 20 K) found near the moon's poles. ",
            heading:"ISRO's Chandrayaan-3 confronts cold lunar odds, here's why",
            image:"https://interestingengineering.com/_next/image?url=https%3A%2F%2Fimages.interestingengineering.com%2F1200x675%2Ffilters%3Aformat(webp)%2F2023%2F09%2F10%2Fimage%2Fjpeg%2FMaB0z0Tln8j5rFJPf3Go9bPUIuyn3rYiiWWlZXxO.jpg&w=1920&q=75"
          },
          {
            id:58,
            Category:"Technology",
            Description:"Days after NASA's four-member team of SpaceX Crew-7 reached the International Space Station (ISS), the SpaceX Crew-6 members have bade farewell to the Expedition 69 NASA astronauts as they prepare for return to Earth.The four members of SpaceX's Crew-6 mission spent more than six months aboard the ISS and are now expected to depart on Saturday (September 2).When we showed up here six months ago, it was a new experience for all of us. I'd been to space.",
            heading:"SpaceX Crew-6 astronauts prepare for return to Earth",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103291233,imgsize-56536,width-720/103291233.jpg"
          },
          {
            id:59,
            Category:"Technology",
            Description:"Apple is testing 3D printing to manufacture upcoming smartwatches, which could mark a shift in the company's production process. Citing sources familiar with the development, Bloomberg’s Mark Gurman reports that Apple is manufacturing the steel chassis for some of its upcoming watches, which includes the Watch Series 9, using 3D printing as a part of a trial run.This new technique, which has been under development for about three years now, uses a specific type of 3D printing.",
            heading:"Apple reportedly testing 3D printing manufacturing, could be used first for this product",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103267794,imgsize-12345,width-720/103267794.jpg"
          },
          {
            id:60,
            Category:"Technology",
            Description:"After landing Chandrayaan-3 on the Moon, ISRO is now focusing on its next mission -- to study the Sun. The space agency has announced that it will launch the PSLV-C57 for the Aditya L1 mission on September 2. ",
            heading:"ISRO's Aditya-L1 spacecraft to study the Sun launching on September 2",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103144383,imgsize-19812,width-720/103144383.jpg"
          },
          {
            id:61,
            Category:"Technology",
            Description:"Amazon has announced that its gaming service Luna will be available on LG smart TVs. The company said that Amazon Luna will be available on LG’s 2021–2023 Smart TV models (webOS6.0/22/23) in the US, Canada, Germany, and the United Kingdom. LG Smart TV owners can now access games on Luna directly from the Home Screen Game Card on 2023 LG Smart TVs. ",
            heading:"Amazon partners with LG to launch Luna on smart TVs",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-103057376,imgsize-12345,width-720/103057376.jpg"
          },
          {
            id:62,
            Category:"Technology",
            Description:"Podcasts are usually two or more people talking things over, and Spotify has spent over a billion dollars in the last year and two, bringing in all the big names it could, introducing new shows, and even video podcasts. However, it is also spending a lot of money on podcasts that do not actually involve any talking, rather known as white noise podcasts. These white noise podcasts, where no one talks.",
            heading:"Spotify’s algorithm is costing it $38 million a year",
            image:"https://static.toiimg.com/thumb/resizemode-4,msid-102837483,imgsize-28200,width-720/102837483.jpg"
          },
          {
            id:63,
            Category:"Fitness",
            Description:"Stability balls can be used for core exercises and balance training. They are relatively inexpensive compared to other fitness equipment, as you have to invest in just one fitness ball and that is about it. One of the primary benefits of stability balls is their ability to engage the core muscles. Sitting or exercising on a stability ball forces your core muscles to work to maintain balance and stability. ",
            heading:"​Stability ball",
            image:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/c8c39f18ef73684cbd18ab81a4ed33a2815a/i1080x475.jpg"
           },
           {
            id:64,
            Category:"Fitness",
            Description:"Health experts believe that by embracing exercise as our ally, we can protect our hearts from heat-related cardiovascular events through incorporation of three key mechanisms employed by the body to cope with heat: sweating, vasodilation and increased thirst. While exercise can enhance sweating and fluid loss, it is important to exercise caution during hot seasons and engage in mild physical activities.",
            heading:"Heat-proof your heart: Exercise tips to shield against heat-related cardiovascular events",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/15/550x309/unsplash-c59hEeerAaI-unsplash_1692109388258_1692109413218.jpg"
           },
           
           {
            id:65,
            Category:"Fitness",
            Description:"It can be a cost-effective and excellent exercise option for improving cardiovascular fitness, burning calories, and promoting overall health. It is quite cost-effective and widely available. You can find a basic jump rope without spending much, making it an affordable fitness tool compared to exercise equipment or gym memberships. Jumping rope burns a significant number of calories, making it an effective tool for weight management and fat loss. It’s an excellent choice for cardio.",
            heading:"​Skipping rope",
            image:"https://www.stylecraze.com/wp-content/uploads/2014/07/Is-Rope-Jumping-Good-For-Health-Benefits-And-Precautions.jpg"
           },
           {
            id:66,
            Category:"Fitness",
            Description:"It is usually recommended to workout first thing in the morning for it is believed to burn the most calories. The debate over whether to workout or not, on an empty stomach has sparked differing opinions, leaving many fitness enthusiasts confused about the right approach. While some swear by the ‘fasted cardio’, others insist on a hearty pre-workout meal",            
            heading:"Morning workout",
            image:"https://studyfinds.org/wp-content/uploads/2020/03/man-in-gray-jacket-doing-push-ups-during-sunrise-3775164-816x520.jpg"
           },
           {
            id:67,
            Category:"Fitness",
            Description:"Yoga has become a global phenomenon over the last several decades. What started out thousands of years ago in the East as a meditative practice has now evolved into a modern lifestyle craze that generates billions of dollars. This can be attributed to its adaptability—people from all walks of life can practice and receive the benefits of yoga. Many celebrities swear by this physical and spiritual practice, and even those who don’t practice yoga seem to know someone who does. ",
            heading:"Yoga",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/13/550x309/jose-vazquez-UUf5nxhEhAs-unsplash_1691902832180_1691902858091.jpg"
           },
           {
            id:68,
            Category:"Fitness",
            Description:" Strength training exercises typically use weights to enhance your muscle mass. Over time people tend to loose lean muscle mass which gets replaced by fat, To overcome this accumulation of fat, strength training is required by your body. It also helps develop strong bones, by increasing bone density. While beginners can get intimidated by the extensive workout routines, here are 5 low-impact strength training workouts that you can start doing.",
            heading:"Gym workouts for beginners",
            image:"https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg"
           },
           {
            id:69,
            Category:"Fitness",
            Description:"Irritable bowel syndrome (IBS) is a disorder of the large intestine. It’s a chronic condition, which means it requires long-term management.",
            heading:"How to Exercise with Irritable Bowel Syndrome",
            image:"https://st.focusedcollection.com/18590116/i/650/focused_309925520-stock-photo-side-view-close-young-caucasian.jpg"
           },
           {
            id:70,
            Category:"Fitness",
            Description:"Many people with MS have gait disorders, or difficulty walking. Walking regularly gives you a light cardio workout and helps maintain your sense of balance. Keep up regular walking as long as you can, even if it’s only for a short distance. Bring a friend or family member for security if you have a fear of falling. Treadmill walking is another option as you can adjust the speed and intensity, and there are handrails to hold onto.",
            heading:"New Exercises and Activities to Try If You Have MS",
            image:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/5403-female_stretching_yoga_mat-732x549-thumbnail-732x549.jpg"
           },
           {
            id:71,
            Category:"Fitness",
            Description:"Researchers are investigating ways to help improve cognitive function and potentially decrease dementia risk.One in three seniors dies from Alzheimer’s disease and other forms of dementia and it kills more people than breast and prostate cancers combined.",
            heading:"Can Aerobic Exercise Improve Cognitive Function and Decrease Alzheimer's Disease Risk?",
            image:"https://www-test.cas.org/sites/default/files/styles/insights_index_hero/public/images/CASGENENGSOC101277-Anti-Aging-Article-HERO-1920x1080.jpg?h=d1cb525d&itok=huLq9oOK"
           },
           {
            id:72,
            Category:"Fitness",
            Description:"If you feel breathless due to anxiety, there are breathing techniques you can try to alleviate symptoms and start feeling better.Inhaling deeply may not always calm you down. Taking a deep breath in is actually linked to the sympathetic nervous system, which controls the fight-or-flight response. But exhaling is linked to the parasympathetic nervous system, which influences our body’s ability to relax and calm down.",
            heading:"8 Breathing Exercises to Try When You Feel Anxious",
            image:"https://artoflivingretreatcenter.org/wp-content/uploads/2021/10/dosha_meditation-e1693232524175.jpg"
           },
           {
            id:73,
            Category:"Fitness",
            Description:"Physical therapy can be life-changing for many people who are recovering from injuries, accidents, surgery and even those who suffering from chronic pain. Physical therapy has a set of exercises, massages and treatments to strengthen muscles, heal injuries and relieve pain. It can help restore mobility in people and can help one live quality life. ",
            heading:"World Physical Therapy Day 2023: Many benefits of physical therapy from relieving pain to strengthening muscles",
            image:"https://www.hindustantimes.com/ht-img/img/2023/09/07/550x309/physical_therapy_1694078244380_1694078258475.jpg"
           },
           {
            id:74,
            Category:"Fitness",
            Description:"Running is a great form of workout and with practice and consistency this can be turned into lifelong passion. Whether or not you are running professionally, it can offer a host of health benefits provided you don't go overboard and give your muscles, bones and ligaments sufficient time to recover.",
            heading:"Running tips: Want to run faster and longer?",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/26/550x309/running_1693039019530_1693039037076.jpg"
           },
           {
            id:75,
            Category:"Fitness",
            Description:"A significant long-term study published online in the British Journal of Sports Medicine reveals that good cardiorespiratory fitness .",
            heading:"Good cardiorespiratory fitness may decrease risk of 9 cancers by 40%, says study",
            image:"https://www.hindustantimes.com/ht-img/img/2023/08/17/550x309/drt6uikm_1669961264383_1692274650913.jpg"
           },
           {
            id:76,
            Category:"Fitness",
            Description:"They promote strength and muscle growth through compound exercises like squats and deadlifts. Barbells improve balance, stability, and coordination. Using a barbell in your workout routine can enhance bone density and metabolic rate, contributing to overall health and fitness. They enable progressive overload, allowing gradual increases in resistance for continuous gains. They're cost-effective and space-efficient, making them accessible for home and gym use.",
            heading:"​Barbell",
            image:"https://cdn.mos.cms.futurecdn.net/6c4qPm7Si69gAamEZqdamc-1200-80.jpg"
           },
           


    ])
    return(
        <>
 <Store.Provider value={[data,setData]}>

{props.children}
 </Store.Provider>
        </>
    )
}
export default ContextStore