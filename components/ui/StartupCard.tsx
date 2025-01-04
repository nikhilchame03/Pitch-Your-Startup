import Home from "@/app/(root)/page";
import { cn, formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./skeleton";


export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: {post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex flex-between">
        <p className="startup-card_date">{formateDate(_createdAt)}</p>
        <div className="flex  gap-1.5 ">
          <EyeIcon className="size-6 text-purple-800"></EyeIcon>
          <span className="text-16-medium ">{views}</span>
        </div>
      </div>

      <div>
        <div className="flex-between mt-5 gap-5 ">
          <div className="flex-1">
            <Link href={`user/${author?._id}`}>
              <p className="text-16-medium line-clamp-1 startup-card_name">
                {author?.name}
              </p>
            </Link>

            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold">{title}</h3>
            </Link>
          </div>

          <Link href={`user/${author?._id}`}>
            <Image
              src={author?.image!}
              alt="placeholder"
              width={48}
              height={48}
              className="rounded-full"
            ></Image>
          </Link>
        </div>

        <Link href={`user/${author?._id}`}>
          <p className="startup-card_desc">{description}</p>

          <img
            src={image}
            alt="place holder"
            className="startup-card_img"
          ></img>
        </Link>

        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>

          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
