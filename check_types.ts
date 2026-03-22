import prisma from "../app/lib/prisma";

async function checkTypes() {
  if (!prisma) return;
  const seller = await prisma.sellers.findFirst({
    where: { puppy_listings: { some: {} } },
    include: { puppy_listings: true }
  });
  
  if (!seller) {
    console.log("No seller found with puppies.");
    return;
  }
  
  console.log("Seller Name type:", typeof seller.name);
  console.log("Seller Location type:", typeof seller.location);
  console.log("Seller City type:", typeof seller.city);
  
  const puppy = seller.puppy_listings[0];
  console.log("Puppy Name type:", typeof puppy.name);
  console.log("Puppy Breed type:", typeof puppy.breed);
  console.log("Puppy Price type:", typeof puppy.price);
  console.log("Puppy Age type:", typeof puppy.age);
  console.log("Puppy Folder Date type:", typeof puppy.folder_date, puppy.folder_date);
}

checkTypes();
