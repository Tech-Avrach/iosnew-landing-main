// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Check, Linkedin } from "lucide-react";
// import { LightBulbIcon } from "./Icons";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

// export const HeroCards = () => {
//   return (
//     <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
//       {/* Testimonial */}
//       {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
//         <CardHeader className="flex flex-row items-center gap-4 pb-2">
//           <Avatar>
//             <AvatarImage
//               alt=""
//               src="https://github.com/shadcn.png"
//             />
//             <AvatarFallback>SH</AvatarFallback>
//           </Avatar>

//           <div className="flex flex-col">
//             <CardTitle className="text-lg">John Doe React</CardTitle>
//             <CardDescription>@john_doe</CardDescription>
//           </div>
//         </CardHeader>

//         <CardContent>This landing page is awesome!</CardContent>
//       </Card> */}

//       {/* Team */}
//       {/* <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
//         <CardHeader className="mt-8 flex justify-center items-center pb-2">
//           <img
//             src="https://i.pravatar.cc/150?img=58"
//             alt="user avatar"
//             className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
//           />
//           <CardTitle className="text-center">Leo Miranda</CardTitle>
//           <CardDescription className="font-normal text-primary">
//             Frontend Developer
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="text-center pb-2">
//           <p>
//             I really enjoy transforming ideas into functional software that
//             exceeds expectations
//           </p>
//         </CardContent>

//         <CardFooter>
//           <div>
//             <a
//               rel="noreferrer noopener"
//               href="https://github.com/leoMirandaa"
//               target="_blank"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//             >
//               <span className="sr-only">Github icon</span>
//               <GitHubLogoIcon className="w-5 h-5" />
//             </a>
//             <a
//               rel="noreferrer noopener"
//               href="https://twitter.com/leo_mirand4"
//               target="_blank"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//             >
//               <span className="sr-only">X icon</span>
//               <svg
//                 role="img"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="fill-foreground w-5 h-5"
//               >
//                 <title>X</title>
//                 <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
//               </svg>
//             </a>

//             <a
//               rel="noreferrer noopener"
//               href="https://www.linkedin.com/in/leopoldo-miranda/"
//               target="_blank"
//               className={buttonVariants({
//                 variant: "ghost",
//                 size: "sm",
//               })}
//             >
//               <span className="sr-only">Linkedin icon</span>
//               <Linkedin size="20" />
//             </a>
//           </div>
//         </CardFooter>
//       </Card> */}
//         <img src="/Housing-pop-up.jpg"/>

//       <img src="/ios-support1-removebg-preview.png" alt="" className="w-[20rem] h-[20rem] ml-40 mt-20"/>

//       {/* Pricing */}
//       {/* <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
//         <CardHeader>
//           <CardTitle className="flex item-center justify-between">
//             Free
//             <Badge
//               variant="secondary"
//               className="text-sm text-primary"
//             >
//               Most popular
//             </Badge>
//           </CardTitle>
//           <div>
//             <span className="text-3xl font-bold">$0</span>
//             <span className="text-muted-foreground"> /month</span>
//           </div>

//           <CardDescription>
//             Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <Button className="w-full">Start Free Trial</Button>
//         </CardContent>

//         <hr className="w-4/5 m-auto mb-4" />

//         <CardFooter className="flex">
//           <div className="space-y-4">
//             {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
//               (benefit: string) => (
//                 <span
//                   key={benefit}
//                   className="flex"
//                 >
//                   <Check className="text-green-500" />{" "}
//                   <h3 className="ml-2">{benefit}</h3>
//                 </span>
//               )
//             )}
//           </div>
//         </CardFooter>
//       </Card> */}

//       {/* Service */}
//       {/* <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
//         <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
//           <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
//             <LightBulbIcon />
//           </div>
//           <div>
//             <CardTitle>Light & dark mode</CardTitle>
//             <CardDescription className="text-md mt-2">
//               Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
//               natusm.
//             </CardDescription>
//           </div>
//         </CardHeader>
//       </Card> */}
//     </div>
//   );
// };

import * as Dialog from "@radix-ui/react-dialog";

export const HeroCards = () => {
  return (
    <div className="lg:flex flex-row flex-wrap gap-8 relative w-100% h-100%">
      {/* Dialog Popup */}
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md z-50"
          >
            {/* <Dialog.Title className="text-xl font-semibold">Welcome to Our Website!</Dialog.Title>
            <Dialog.Description className="text-muted-foreground mt-2">
              Discover our amazing services and features. Please close this popup to continue exploring.
            </Dialog.Description> */}
            <img src="/Housing-pop-up.jpg" alt="Housing Information" className="mt-4 w-full rounded-lg" />
            <div className="mt-4 flex justify-end">
              <Dialog.Close asChild>
                <button
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Close
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Other Cards */}
      <img src="/ios-support1-removebg-preview.png" alt="" className="w-80 h-80 lg:ml-20 lg:mt-20" />
    </div>
  );
};
