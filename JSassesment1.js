const NFTWallet=[];

function mintNFT(name,age,course,location){
    const NFTCoin={
        "name":name,
        "age":age,
        "course":course,
        "location":location,
    }
    NFTWallet.push(NFTCoin);
    console.log("Minted "+name);
    console.log("******************");
}

function listNFTs(){
    for(var i=0;i<NFTWallet.length;i++){
        console.log("NFT id = \t" + (i+1));
        console.log("NFT name = \t" + NFTWallet[i].name);
        console.log(NFTWallet[i].name+" age = \t" + NFTWallet[i].age);
        console.log(NFTWallet[i].name+" course = \t" + NFTWallet[i].course);
        console.log(NFTWallet[i].name+" location = \t" + NFTWallet[i].location);
        console.log("-----------------------------------------\n");
    }
}

function getTotalSupply(){
    return(NFTWallet.length);
}

mintNFT("Kunal",20,"BE-CSE","Chandigarh");
mintNFT("Akshat",21,"Applied Mathematics","Ranchi");
mintNFT("Ashish",20,"BE-Mechanical","Chhatisgarh");
mintNFT("Nishant",19,"Btech-CSE","Vellor");
mintNFT("Amit",19,"BE-Electrical","Kolkata");

listNFTs();
console.log("Total NFTs = " + getTotalSupply());
