const locations = {
    cafe: {
        name: "cafe",
        items: [
            { name: "boba", translation: "trà trân châu" },
            { name: "mochi-donut", translation: "bánh rán mochi" },
            { name: "viet-coffee", translation: "cà phê sữa đá" }
        ],
        npc: "chef",
        text: ["Welcome to Coco Leaf!", "Our cafe sells drinks and snacks.", "What would you like to order?"]
    },

    florist: {
        name: "flower-shop",
        items: [
            { name: "rose", translation: "hoa hồng" },
            { name: "cactus", translation: "cây xương rồng" },
            { name: "bouqet", translation: "bó hoa" }
        ],
        npc: "florist",
        text: ["Welcome to Kim's Flowers!", "I have lots of pretty flowers you can choose", "If you're new, I can suggest some popular choices!"]
    },
  
    "eye-doctor": {
        name: "eye-doctor",
        items: [
            { name: "glasses", translation: "mắt kính" },
            { name: "glasses-case", translation: "hộp đựng kính" },
            { name: "lens-towel", translation: "khăn tay" }
        ],
        npc: "doctor",
        text: ["Welcome to Dream Vision.", "Do you have questions about your eyes?", "I can offer you a few things."]
    },

    store: {
        name: "store",
        items: [
            { name: "chocolate", translation: "sô cô la" },
            { name: "eggs", translation: "trứng" },
            { name: "milk", translation: "sữa" }
        ],
        npc: "clerk",
        text: ["Hi, welcome to Tran's Convenience Store.", "Let me know if you need help looking for something", "Our most common purchases are these."]
    },

    bakery: {
        name: "bakery",
        items: [
            { name: "banh-mi", translation: "bánh mì thịt" },
            { name: "spring-roll", translation: "gỏi cuốn" },
            { name: "pastry", translation: "bánh ngọt" }
        ],
        npc: "baker",
        text: ["Hello~ Welcome to Ba Lẹ  bakery.", "We serve baguette sandwiches, sweet bread, and Vietnamese lunch boxes.", "May I take your oder?"]
    },

    restaurant: {
        name: "restaurant",
        items: [
            { name: "seafood-soup", translation: "hủ tiếu" },
            { name: "beef-noodle-soup", translation: "bún bò huế " },
            { name: "meat-rice-plate", translation: "com thịt nướng" }
        ],
        npc: "server",
        text: ["Welcome to Pho Hoa, please take a seat!", "We serve lots of Vietnamese dishes. Do you prefer noodles, rice, soup, stir fry?", "These are today's specials."]
    },
}

module.exports = locations;