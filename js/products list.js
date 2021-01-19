//products list
var products = [{
        id: 1,
        title: 'Elephant',
        catalog: 'Animal Toys',
        price: 15.99,
        description: "The elephant is part of a family of wild animals that live in a place called half-world. They roam freely in search of new friends. HALFTOYS simplifies the appearance of living creatures into a 3D shaped puzzle. The elephant is held together by magnets and interlocking parts. Just pull it apart and you will find the Skeleton that is made up of bones that can be put together like a puzzle. This toy was designed to help build your child's fine motor skills, problem-solving abilities, learn about anatomy, and stimulate curiosity. It includes a manual and diorama to help your child create stories and adventures for their new playmate.  ",
        rating: 2,
        image: 'images/Elephant1.jpg',
        image2: 'images/Elephant2.jpg',
        image3: 'images/Elephant3.jpg',
        image4: 'images/Elephant1.jpg',
        image5: 'images/Elephant2.jpg',
        image6: 'images/Elephant3.jpg'
    },
    {
        id: 2,
        title: 'Hippo',
        catalog: 'Animal Toys',
        price: 14.99,
        description: "The hippo is part of a family of wild animals that live in a place called half-world. They roam freely in search of new friends. HALFTOYS simplifies the appearance of living creatures into a 3D shaped puzzle. The hippo is held together by magnets and interlocking parts. Just pull it apart and you will find the Skeleton that is made up of bones that can be put together like a puzzle. This toy was designed to help build your child's fine motor skills, problem-solving abilities, learn about anatomy, and stimulate curiosity. It includes a manual and diorama to help your child create stories and adventures for their new playmate. ",
        rating: 4,
        image: 'images/Hippo1.jpg',
        image2: 'images/Hippo2.jpg',
        image3: 'images/Hippo3.jpg',
        image4: 'images/Hippo1.jpg',
        image5: 'images/Hippo2.jpg',
        image6: 'images/Hippo3.jpg'
    },
    {
        id: 3,
        title: 'Crocodile',
        catalog: 'Animal Toys',
        price: 16.99,
        description: "The Crocodile is part of a family of wild animals that live in a place called half-world. They roamfreely in search of new friends. HALFTOYS simplifies the appearance of living creatures into a 3D shaped puzzle. The Crocodile is held together by magnets and interlocking parts. Just pull it apart and you will find the Skeleton that is made up of bones that can be put together like a puzzle. This toy was designed to help build your child's fine motor skills, problem-solving abilities, learn about anatomy, and stimulate curiosity. It includes a manual and diorama to help your child create stories and adventures for their new playmate.",
        rating: 5,
        image: 'images/Crocodile1.jpg',
        image2: 'images/Crocodile2.jpg',
        image3: 'images/Crocodile3.jpg',
        image4: 'images/Crocodile1.jpg',
        image5: 'images/Crocodile2.jpg',
        image6: 'images/Crocodile3.jpg'
    },
    {
        id: 4,
        title: 'Word Creatures',
        catalog: 'Picture Books',
        price: 9.99,
        description: 'The picture book of "Character Random Lesson" selects 24 oracle bone inscriptions that are representative and close to children’s lives. Around these 24 characters, the children are written with a lively rhythm and enlightenment of environmental protection. poetry. Each little poem is equipped with beautiful illustrations, rich in colors and lovely style, which will bring children a beautiful and lively nature classroom of "Word Random Lessons". In order to increase the interactivity and interest, the "Character Random Lesson" picture book is also equipped with exquisite cute animations. Children can play with the animation while watching the picture book and learn Chinese characters happily.',
        rating: 3,
        image: 'images/book1-1.jpg',
        image2: 'images/book1-2.jpg',
        image3: 'images/book1-3.jpg',
        image4: 'images/book1-1.jpg',
        image5: 'images/book1-2.jpg',
        image6: 'images/book1-3.jpg'
    },
    {
        id: 5,
        title: 'Like Picture Like Chinese',
        catalog: 'Picture Books',
        price: 29.99,
        description: `<p>"Chinese characters are drawn" is the first Chinese character book for children's enlightenment.</p>
                      <p>When the Chinese characters were small, they were oracle bone inscriptions like paintings. It has clumsy and cute lines, vivid and vivid, which makes people understand at a glance. Oracle, just in line with children's image cognitive thinking. Children in the literacy stage are simple and beautiful. Their way of looking at the world is very close to that of the ancestors when they created characters. They can feel the primitive and rough natural beauty of Oracle bone inscriptions more easily than adults.</p>
                      <p>Starting with Oracle and allowing children to enter the world of Chinese characters is a correct and fun literacy method.</p>
                      <p>With the above observations, and after years of field teaching, a dad with ten years of Oracle research experience determined to let his three-year-old daughter use the correct method to literate. So he teamed up with child psychologist Dai Zhendong, MUJI designer Li Zhiqian, and children\'s illustrator Ah Xian. So there was the book "Chinese Characters Are Drawn".</p>`,
        rating: 5,
        image: 'images/book2-1.jpg',
        image2: 'images/book2-2.jpg',
        image3: 'images/book2-3.jpg',
        image4: 'images/book2-1.jpg',
        image5: 'images/book2-2.jpg',
        image6: 'images/book2-3.jpg'
    },
    {
        id: 6,
        title: 'Oracle Matching Cards',
        catalog: 'Picture Books',
        price: 59.99,
        description: `The university question in the small card·Oracle builds a bridge between pictures and Chinese characters·Professional font designer + senior children's hand-drawn illustrator = As always high-looking. At the same time, cultivate children's observation, memory, concentration and self-confidence· Four themes to build children's own cognitive kingdom.`,
        rating: 4,
        image: 'images/book3-1.jpg',
        image2: 'images/book3-2.jpg',
        image3: 'images/book3-3.jpg',
        image4: 'images/book3-1.jpg',
        image5: 'images/book3-2.jpg',
        image6: 'images/book3-3.jpg'
    }
];
//function to display stars
idstar = parseInt(window.location.search.split('id=')[1]);
let rts = {
    star: +(products[idstar - 1].rating)
}
const starsTotal = 5;
document.addEventListener('DOMContentLoaded', getRats);

function getRats() {
    for (let ra in rts) {
        const starPercentage = (rts[ra] / starsTotal) * 100;
        console.log(rts[ra]);
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        document.querySelector(`.${ra}
       .stars-inner`).style.width = starPercentageRounded;
    }
}
