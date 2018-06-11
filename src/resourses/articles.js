import uuidv1 from "uuid/v1";

const articles = [
    {
        id: uuidv1(),
        date: "07/15/2018",
        title: "Trump retracts his endorsement of G7 final statement",
        text: "President Trump retracted his endorsement of the final statement from the G7, tweeting afterward he had instructed representatives it. He blamed Canadian Prime Minister Justin Trudeau's statement afterward that Canada will not be and will go through with retaliatory tariffs. ",
        comments: [
            {
                comment: "Just left the @G7 Summit in beautiful Canada. Great meetings and relationships with the six Country Leaders especially since they know I cannot allow them to apply large Tariffs and strong barriers to..."
            },
            {
                comment: "...U.S.A. Trade. They fully understand where I am coming from. After many decades, fair and reciprocal Trade will happen!"
            }
        ]
    },
    {
        id: uuidv1(),
        date: "05/15/2018",
        title: "Trump: Kim has a 'one-time shot'",
        text: "Washington (CNN)President Donald Trump sounded an optimistic note Saturday morning about his upcoming summit with North Korean leader Kim Jong Un, but called the meeting a \"one-time shot\" for Kim.\n" +
        "\n" +
        "\"I feel that Kim Jong Un wants to do something great for his people,\" Trump said. \"And he has that opportunity, and he won't have that opportunity again.\"",
        comments: [
            {
                comment: "Trump said Saturday that once they met, he would know for how long to continue talks and whether it would amount to a waste of time to go forward."
            },
            {
                comment: "I think I'll know pretty quickly whether or not, in my opinion, something positive will happen,\" Trump said. \"And if I think it won't happen, I'm not going to waste my time. I don't want to waste his time."
            }
        ]
    }
];
export default articles;
