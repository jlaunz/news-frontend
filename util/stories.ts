import { ArticleSummary } from "../model/Article";

export const storieIdListWrapper = {
  stories: [
    129463574, 300651689, 129461719, 129464037, 129439472, 129459032, 300651607,
    300652639, 300645673, 300643179,
  ],
};


export const getArticleSummary: (any) => ArticleSummary = (articleRaw) => {
    return {
        id: articleRaw.id,
        title: articleRaw.title,
        intro: articleRaw.intro,
        date: articleRaw.datetime_iso8601
    }
}

export const sampleStory1 = {
    "id": 129463574,
    "path": "/dominion-post/news/wellington/129463574/embroidery-turns-nasty-at-the-wellington-city-council",
    "url": "http://www.stuff.co.nz/_json/dominion-post/news/wellington/129463574/embroidery-turns-nasty-at-the-wellington-city-council",
    "section": "Wellington",
    "section-home": "Wellington",
    "section-top-level": "Dominion Post",
    "category-description": "Wellington",
    "layout": "landscape-video",
    "title": "Embroidery turns nasty at the Wellington City Council",
    "alt_headline": "Embroidery turns nasty at Wellington City Council",
    "isHeadlineOverrideApplied": true,
    "datetime_iso8601": "20220803T120005+1200",
    "datetime_display": "12:00 03/08/2022",
    "byline": "Tom Hunt",
    "source_code": "1national-newsroom",
    "source_name": "Stuff",
    "intro": "Craft has turned bitter at the Wellington City Council, with Councillor Rebecca Matthews claiming her “f... Nimbys” post has turned into a “storm in a cross-stitch”.",
    "alt_intro": "Councillors' latest spat involves cross-stitch and harsh language.",
    "body": "<p>Craft has turned bitter at the Wellington City Council, with Councillor Rebecca Matthews claiming her “f... Nimbys” post has turned into a “storm in a cross-stitch”. </p> \n<p>The two protagonists in the bizarre spat are regular sparring partners: Matthews in the left corner and Diane Calvert in the right. The arena is Twitter; the medium: embroidery.</p> \n<p>It was July 27 when Matthews – an ardent supporter of housing intensification – <a href=\"https://twitter.com/RebeccaJEmm/status/1552123303975718912?s=20&amp;t=QU2DHbwXLCL1nk45dEkb-A\">posted a picture</a> of an embroidery she was given: It showed Matthews, with her trademark red mane, and the words “f... Nimbys” emblazoned across her.</p> \n<p>“My new campaign image just dropped – will this look good on a billboard?,” Matthews asked the Twittersphere, seemingly as a joke. </p> \n<p><strong>READ MORE:<br> * <a href=\"https://www.stuff.co.nz/dominion-post/wellington-top-stories/127999349/an-orgy-of-spending-tense-meeting-over-wellingtons-660m-annual-plan?rm=a\">'An orgy of spending': Tense meeting over Wellington's $660m annual plan</a><br> * <a href=\"https://www.stuff.co.nz/dominion-post/news/wellington/127649812/four-wellington-city-councillors-standing-down-at-next-election?rm=a\">Four Wellington City councillors standing down at next election</a><br> * <a href=\"https://www.stuff.co.nz/national/126889880/auckland-councillor-likens-housing-intensification-to-gang-rape?rm=a\">Auckland councillor likens housing intensification to 'gang rape' </a><br> </strong></p> \n<p>Cue outrage.</p> \n<p>“Nimbys” stands for “not in my backyard” and is usually a negative slight against people who oppose development, particularly in their neighbourhoods.</p> \n<p>Matthews confirmed she had since been approached by two residents’ associations – one of which said she should apologise to her fellow ward councillors and to all residents of her Wharangi/Onslow-Western ward.</p> \n<p>She also said Calvert emailed her to say she should apologise and there had been “complaints from all over the city”.</p> \n<p>But Matthews, who described the spat as a “storm in a cross-stitch”, was not planning to apologise for posting somebody else’s embroidery on her Twitter page.</p> \n<p>“It is a long, long, long bow to say it is my comment or a particular insult to anyone,” she said.</p> \n<p>If she was to apologise to the entire ward, as one residents’ association asked, the logical assumption was that she thought the entire ward population of the ward were Nimbys.</p> \n<p>“I have seen harmful stuff on the Internet and this is not it.”</p> \n<p>Calvert, who also represents the Wharangi/Onslow-Western ward, declined to comment. But she confirmed that she, among others, asked Matthews to apologise.</p>",
    "images": [
        {
            "id": 300347757,
            "position_after_paragraph": 7,
            "datetime_iso8601": "20220803T120005+1200",
            "datetime_display": "12:00 03/08/2022",
            "creditline": "Ross Giblin/Stuff",
            "source_code": "Not For Syndication",
            "source_name": "not-for-syndication",
            "caption": "Wellington city councillor Rebecca Matthews has no plans to apologise for the “F... Nimbys” embroidery post",
            "variants": [
                {
                    "id": 300347757,
                    "layout": "Splash Image",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffSplash.300x400.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "300",
                    "height": "400",
                    "image_type_id": "StuffSplash",
                    "urls": {
                        "300x400": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffSplash.300x400.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Defcon Image",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffBigHeadline.418x220.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "418",
                    "height": "220",
                    "image_type_id": "StuffBigHeadline",
                    "urls": {
                        "418x220": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffBigHeadline.418x220.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Standard Image",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.620x349.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "620",
                    "height": "349",
                    "image_type_id": "StuffLandscapeSixteenByNine",
                    "urls": {
                        "320x180": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.320x180.252uqe.png/1659485394715.jpg",
                        "380x214": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.380x214.252uqe.png/1659485394715.jpg",
                        "620x350": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.620x350.252uqe.png/1659485394715.jpg",
                        "620x349": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.620x349.252uqe.png/1659485394715.jpg",
                        "1240x700": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.1240x700.252uqe.png/1659485394715.jpg",
                        "710x400": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.710x400.252uqe.png/1659485394715.jpg",
                        "418x235": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.418x235.252uqe.png/1659485394715.jpg",
                        "1420x800": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeSixteenByNine.1420x800.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Thumbnail 1:1",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSquare.1000x1000.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "1000",
                    "height": "1000",
                    "image_type_id": "StuffThumbnailSquare",
                    "urls": {
                        "1000x1000": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSquare.1000x1000.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Strap Image",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.300x200.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "300",
                    "height": "200",
                    "image_type_id": "StuffLandscapeThreeByTwo",
                    "urls": {
                        "300x200": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.300x200.252uqe.png/1659485394715.jpg",
                        "200x133": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.200x133.252uqe.png/1659485394715.jpg",
                        "600x400": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.600x400.252uqe.png/1659485394715.jpg",
                        "1151x768": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.1151x768.252uqe.png/1659485394715.jpg",
                        "490x327": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.490x327.252uqe.png/1659485394715.jpg",
                        "1464x976": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffLandscapeThreeByTwo.1464x976.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Small Thumbnail 16:9",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.1600x900.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "1600",
                    "height": "900",
                    "image_type_id": "StuffThumbnailSixteenByNine",
                    "urls": {
                        "320x180": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.320x180.252uqe.png/1659485394715.jpg",
                        "1600x900": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.1600x900.252uqe.png/1659485394715.jpg",
                        "380x214": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.380x214.252uqe.png/1659485394715.jpg",
                        "620x350": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.620x350.252uqe.png/1659485394715.jpg",
                        "620x349": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.620x349.252uqe.png/1659485394715.jpg",
                        "1240x700": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.1240x700.252uqe.png/1659485394715.jpg",
                        "710x400": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.710x400.252uqe.png/1659485394715.jpg",
                        "418x235": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.418x235.252uqe.png/1659485394715.jpg",
                        "1420x800": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailSixteenByNine.1420x800.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Thumbnail 4:5",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailFourByFive.1000x1250.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "1000",
                    "height": "1250",
                    "image_type_id": "StuffThumbnailFourByFive",
                    "urls": {
                        "1000x1250": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnailFourByFive.1000x1250.252uqe.png/1659485394715.jpg"
                    }
                },
                {
                    "id": 300347757,
                    "layout": "Small Thumbnail",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnail.90x60.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "90",
                    "height": "60",
                    "image_type_id": "StuffThumbnail",
                    "urls": {
                        "130x86": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnail.130x86.252uqe.png/1659485394715.jpg",
                        "90x60": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnail.90x60.252uqe.png/1659485394715.jpg",
                        "140x93": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnail.140x93.252uqe.png/1659485394715.jpg",
                        "240x160": "https://resources.stuff.co.nz/content/dam/images/4/y/t/h/t/9/image.related.StuffThumbnail.240x160.252uqe.png/1659485394715.jpg"
                    }
                }
            ],
            "asset_type": "IMAGE"
        },
        {
            "id": 300322522,
            "position_after_paragraph": 9,
            "datetime_iso8601": "20220803T120005+1200",
            "datetime_display": "12:00 03/08/2022",
            "creditline": "ROBERT KITCHIN/STUFF",
            "source_code": "Not For Syndication",
            "source_name": "not-for-syndication",
            "caption": "Diane Calvert would not comment on the Nimby spat",
            "variants": [
                {
                    "id": 300322522,
                    "layout": "Standard Image",
                    "src": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.620x349.252uqe.png/1659485394715.jpg",
                    "media_type": "Photo",
                    "width": "620",
                    "height": "349",
                    "image_type_id": "StuffLandscapeSixteenByNine",
                    "urls": {
                        "320x180": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.320x180.252uqe.png/1659485394715.jpg",
                        "380x214": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.380x214.252uqe.png/1659485394715.jpg",
                        "620x350": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.620x350.252uqe.png/1659485394715.jpg",
                        "620x349": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.620x349.252uqe.png/1659485394715.jpg",
                        "1240x700": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.1240x700.252uqe.png/1659485394715.jpg",
                        "710x400": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.710x400.252uqe.png/1659485394715.jpg",
                        "418x235": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.418x235.252uqe.png/1659485394715.jpg",
                        "1420x800": "https://resources.stuff.co.nz/content/dam/images/4/y/s/y/c/a/image.related.StuffLandscapeSixteenByNine.1420x800.252uqe.png/1659485394715.jpg"
                    }
                }
            ],
            "asset_type": "IMAGE"
        }
    ],
    "image_overrides": [],
    "videos": [
        {
            "id": 123286645,
            "position_after_paragraph": 0,
            "layout": "Standard Video",
            "source_code": "Stuff",
            "datetime_iso8601": "20220331T145050+1300",
            "datetime_display": "14:50 31/03/2022",
            "creditline": "STUFF",
            "caption": "The Wellington City Council's draft Spatial Plan aims to provide more housing across the city as the population increases (First published in 2020).",
            "src": "https://media.stuff.co.nz/video/production/1604374565403-SOCIAL%20VID%20Copy%2001_3.mp4",
            "video_poster": {
                "id": 123286638,
                "layout": "Video Image",
                "src": "https://resources.stuff.co.nz/content/dam/images/2/1/e/g/k/u/image.related.StuffLandscapeSixteenByNine.620x349.21egl1.png/1648691453761.jpg",
                "width": "620",
                "height": "349"
            },
            "asset_type": "VIDEO"
        }
    ],
    "html_assets": [
        {
            "id": 300239999,
            "data_content": "  <link rel=\"stylesheet\" href=\"https://www.stuff.co.nz/static/spade/fonts/stuff-sans.css\">\n    <style>\n        div.alert-container{\n            height:100px;\n            width: 100%;\n           \n            margin: 20px auto;\n            border-top: 1px solid #000;\n            border-bottom: 1px solid #000;\n            display: flex;\n            align-items: flex-start;\n            justify-content: space-between;\n            text-decoration: none;\n            position: relative;\n            box-sizing: border-box;\n        }\n        div.alert-container#wellington{\n            border-color: #2C3BE8;\n            color: #2C3BE8;\n        }\n        div.alert-container div{\n            display: flex;\n            flex: 1;\n            margin-top: 20px;\n        }\n        div.alert-container div h3{\n            font-family: \"Stuff Sans\", Arial, Helvetica, sans-serif;\n            margin: 0;\n            margin-left: 15px;\n            margin-right: 34px;\n            font-size: 27px;\n            font-weight: 700;\n            text-align: left;\n            line-height: 1.2;\n        }\n        div.alert-container a{\n            transition: all .2s;\n            cursor: pointer;\n            font-family: \"Stuff Sans\", Arial, Helvetica, sans-serif;\n            text-decoration: none;\n        }\n        div.alert-container a:hover{\n            opacity: .85;\n        }\n        div.alert-container a:nth-child(2){\n            width: 178px;\n            height: 48px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border: none;\n            font-size: 16px;\n            align-self: center;\n            margin-right: 22px;\n            \n        }\n        div.alert-container a:nth-child(3){\n            width: 48px;\n            height: 48px;\n            border-radius: 50%;\n            display: none;\n            align-items: center;\n            justify-content: center;\n            border: none;\n            align-self: center;\n            position: relative;\n            box-sizing: border-box;\n            margin-right: 17px;\n        }\n        div.alert-container a:nth-child(3) svg{\n            height: 16px;\n            width: 16px;\n        }\n        div.alert-container#wellington a{\n            background-color: #2C3BE8;\n            color: #E2C7FD;\n        }\n        div.alert-container#wellington a:nth-child(3) svg path{\n            fill: #E2C7FD;\n        }\n        br.alert-landbreak{\n            display: none;\n        }\n        @media(min-width:840px) and (max-width:1020px){\n            div.alert-container{\n                align-items: center;\n            }\n            div.alert-container div{\n                flex-direction: column;\n                margin-top: 0;\n            }\n            div.alert-container div h3{\n                font-size: 24px;\n                white-space: pre-wrap;\n                margin-right: 0;\n            }\n            div.alert-container a:nth-child(2){\n                display: none;\n            }\n            div.alert-container a:nth-child(3){\n                display: flex;\n            }\n            br.alert-landbreak{\n            display: block;\n            }\n        }\n        @media(max-width:600px){\n            div.alert-container{\n                align-items: center;\n            }\n            div.alert-container div{\n                flex-direction: column;\n                margin-top: 0;\n            }\n            div.alert-container div h3{\n                font-size: 24px;\n                white-space: pre-wrap;\n                margin-right: 0;\n            }\n\n            div.alert-container a:nth-child(2){\n                display: none;\n            }\n            div.alert-container a:nth-child(3){\n                display: flex;\n            }\n            br.alert-landbreak{\n            display: block;\n            }\n        }\n        @media(max-width:370px){\n            div.alert-container a:nth-child(3){\n                margin-right: 5px;\n            }\n        }\n    </style>\n<div class=\"alert-container\" id=\"wellington\">\n        <div>\n            <h3>Don’t miss important <br class=\"alert-landbreak\">Wellington&#160;news</h3>\n        </div>\n        <a href=\"https://www.stuff.co.nz/technology/apps/94607313/how-to-customise-your-stuff-push-alerts\" target=\"_top\" >Get mobile alerts</a>\n        <a href=\"https://www.stuff.co.nz/technology/apps/94607313/how-to-customise-your-stuff-push-alerts\" target=\"_top\" >\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M0 18H24.34L13.16 29.18L16 32L32 16L16 0L13.18 2.82L24.34 14H0V18Z\"/>\n            </svg>\n        </a>\n    </div>\n",
            "position_after_paragraph": 11,
            "asset_type": "HTML"
        },
        {
            "id": 300001474,
            "data_content": "<link href=\"https://fonts.googleapis.com/css?family=Merriweather+Sans:300,700\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://interactives.stuff.co.nz/2022/rebrand/standardbyline.css\">\n<div class=\"bigbyline-container\"><div class=\"bigbyline\">\n\n\n\n<!-- Replace \"https://www.stuff.co.nz/\" with the URL of the author's section or tag -->\n\n\t\t<a href=\"https://www.stuff.co.nz/authors/tom-hunt\">\n\n\n\n\n<!--  Replace \"photo.jpg\" with the URL of your photograph -->\n\n<div class=\"bigbyline-image\" style=\"background-image:url(https://static3.stuff.co.nz/tom-hunt-aca73cfa.jpg);\">\n\n</div><div class=\"bigbyline-text\"><span class=\"bylinetext-blue\">More from<br/><span class=\"bylinetext-bold\">\n\t\t\t\n\n\n<!-- Replace \"Firstname Lastname\" with the name of the author, and \"Editor\" with the position. Don't remove the \"&bull;\" - this is the bullet point -->\n\n\t\t\tTom Hunt &bull; Senior Reporter\n\n\t\t\t\n\n\t\t\t</span></span></div></a><br/>\n\t\t\t\n\n\n<!-- Replace \"newsroom@stuff.co.nz\" with the author's email address in both places -->\n\n\t\t\t<a class=\"bylinetext-email\" href=\"mailto:tom.hunt@stuff.co.nz\">tom.hunt@stuff.co.nz</a> \n\n\t\t\t\n\n\t\t</div>\n\t</div>",
            "position_after_paragraph": 12,
            "asset_type": "HTML"
        },
        {
            "id": 300167369,
            "data_content": "<link rel=\"stylesheet\" href=\"https://www.stuff.co.nz/static/spade/fonts/stuff-sans.css\">\n    <style>\n        div.supporter-wrapper{\n            max-width:100%;\n            margin: 20px auto;\n            overflow: hidden;\n            position: relative;\n            box-sizing: border-box;\n            display: flex;\n            flex-direction: column;\n            background-color: #F5F5F5;\n            font-family: \"Stuff Sans\", Arial, Helvetica, sans-serif;\n        }\n        div.supporter-wrapper--top{\n            padding: 5px 19px 19px 19px;\n            box-sizing: border-box;\n        }\n        div.supporter-wrapper--top p{\n            text-align: left;\n            line-height: 1.45;\n            margin: 15px 0;\n            font-size: 18px;\n            color: #0F1E54;\n            font-weight: 400;\n            font-family: \"Stuff Sans\", Arial, Helvetica, sans-serif;\n        }\n        div.supporter-wrapper--top p:nth-child(1){\n            font-size: 20px;\n        }\n        div.supporter-wrapper--bottom{\n            background-color: #FF911A;\n            text-decoration: none;\n            color: #0F1E54;\n            font-weight: 700;\n            font-size: 19px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            box-sizing: border-box;\n            padding: 10px 19px;\n            \n        }\n        div.supporter-wrapper--bottom span{\n            text-align: left;   \n            font-size: 19px;\n            display: block;\n            flex:1;\n            font-family: \"Stuff Sans\", Arial, Helvetica, sans-serif;\n        }\n        div.supporter-wrapper--bottom a{\n            width: 48px;\n            height: 48px;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border: none;\n            align-self: center;\n            position: relative;\n            box-sizing: border-box;\n            background-color: #fff;\n            cursor: pointer;\n            transition: all .2s;\n            margin-left: auto;\n        }\n        div.supporter-wrapper--bottom a:hover{\n            opacity: .85;\n        }\n        \n        div.supporter-wrapper--bottom a svg{\n            height: 16px;\n            width: 16px;\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%,-50%);\n        }\n        div.supporter-wrapper--bottom a path{\n            fill: #0F1E54;\n        }\n    </style>\n        <div class=\"supporter-wrapper\">\n        <div class=\"supporter-wrapper--top\">\n            <p><b>No news is not good news, Wellington</b></p>\n            <p>Do you remember where you saw the jubilation of same-sex marriage being legalised in Aotearoa, or got minute-by-minute updates after the Kaikōura earthquake rocked Wellington?</p>\n            <p>Chances are, here.</p>\n            <p>And do you recall where you first heard of a convoy headed to Parliament in 2022, and where you watched a blow-by-blow account of the following 23 days?</p>\n            <p>Chances are, here.</p>\n            <p>There have been council meetings, crimes, and sewage running in the streets that, chances are, you read about here.</p>\n            <p>Not to forget the celebrations of Wellington, the arts, the coffee, the craft beer, the wind.</p>\n            <p>Here, here, here, and here.</p>\n            <p><b>But it costs money to keep putting things here. Please support our work today.</b></p>\n        </div>\n        <div class=\"supporter-wrapper--bottom\" >\n            <span>Support Stuff’s journalism today</span>\n            <a\n            onclick=\"sendEvent({ event: 'article.become.a.supporter' })\"\n            data-pp-page=\"pwyw\"\n            data-pp-metadata=\"$pay-what-you-want-campaign-page-version-1.1\"\n            href=\"https://dashboard.presspatron.com/donations/new?frame=1&t=TJu26zZFBKa635NQ13AZRn8S\">\n                <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M0 18H24.34L13.16 29.18L16 32L32 16L16 0L13.18 2.82L24.34 14H0V18Z\"/>\n                </svg>\n            </a>\n        </div>\n    </div>\n    <script>\n    \n    if(document.cookie.indexOf('supportprogramme_thankyou=1') !== -1){\n    document.querySelector('.support-brief-container').style.display=\"none\";\n    }\n    \n    function sendEvent(event) {\n    if (window.digitalData) {\n        window.digitalData.events.push(event);\n    }\n    }\n    \n    window.addEventListener(\"message\", (event) => {\n    if (event.data && event.data.eventName === \"payment_successful\") {\n    var oneDayInSec = 86400;\n    var exclusionPeriod =\n    event.data.payload.frequency === \"one-time\"\n        ? 60 * oneDayInSec\n        : 365 * oneDayInSec;\n    document.cookie =\n    \"supportprogramme_thankyou=1; max-age=\" +\n    exclusionPeriod +\n    \"; domain=.stuff.co.nz;path=/;\";\n    sendEvent({\n    event: \"donation.successful\",\n    \"donation.amount\": event.data.payload.amount,\n    \"donation.frequency\": event.data.payload.frequency,\n    });\n    }\n    });\n    </script>\n",
            "position_after_paragraph": 14,
            "asset_type": "HTML"
        }
    ],
    "galleries": [],
    "allowComments": false,
    "asset_type": "ARTICLE",
    "headline_flags": [
        "VIDEO"
    ],
    "sponsored": false
}
