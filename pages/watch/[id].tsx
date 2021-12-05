import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Navbar } from "../../components/navbar";
import { Player } from "../../components/player";
import { VideoInfo } from "../../components/videoinfo";
import { VideoUserInfo } from "../../components/videouserinfo";
import { CommentInput } from "../../components/commentinput";
import { Comment } from "../../components/comment"
import { IProps as IComment } from "../../components/comment/Iprops"
import { useUser } from "../../context";

const Watch: NextPage = (): JSX.Element => {
  const [fakeData, setFakeData] = useState<IComment[]>([
    {
      picture: "https://yt3.ggpht.com/V1XtlvqVTyQ9-iPdAFmb6JsrEStcLHAIWAUw_V7W70H8G3QpndOkkgeapQFxQDK0MXU7Cl9s=s48-c-k-c0x00ffffff-no-rj",
      username: "イド",
      date: "seconds ago",
      comment: "17:07 ここの繋げ方が神で鳥肌たった…!!!",
      likesAndDislikes: {
        likes: 100,
        dislikes: 0
      }
    },
    {
      picture: "https://yt3.ggpht.com/KUJAnhZ85m3NKiCeWG2dzeo1UBBzk8ibov3k7Rw-Sfv83sv2DV0V6gFrd2HuCAHLWEHp93sr=s48-c-k-c0x00ffffff-no-rj",
      username: "しの",
      date: "a year ago",
      comment: "選曲センスも繋ぎも完璧すぎてずっと聴いていられる、、、、！！",
      likesAndDislikes: {
        likes: 100,
        dislikes: 0
      }
    },
    {
      picture: "https://yt3.ggpht.com/ytc/AKedOLQYJDfzz4ehvgEqpTaZYzd4rhSUbAhNBZie98AkFg=s48-c-k-c0x00ffffff-no-rj",
      username: "Ian",
      date: "a year ago ",
      comment: "Love this mix",
      likesAndDislikes: {
        likes: 100,
        dislikes: 0
      }
    },
    {
      picture: "https://yt3.ggpht.com/ytc/AKedOLTwtFTOagMw8kJfQgFaSxv0w2Xdq3TKkc1EsyhGkA=s48-c-k-c0x00ffffff-no-rj",
      username: "田村",
      date: "an hour ago ",
      comment: "こんなに素晴らしいものがあったのか…！",
      likesAndDislikes: {
        likes: 100,
        dislikes: 0
      }
    }
  ])

  const { picture, username } = useUser();

  const onSubmit = (): void => {
    const newComment = {
      picture,
      username,
      date: "a second ago ",
      comment: "I hate niggers",
      likesAndDislikes: {
        likes: 10000,
        dislikes: 0 
      }
    };

    setFakeData([...fakeData, newComment]);
  }

  if (!picture) return <h1>loading...</h1>


  return (
    <>
      <Navbar />
      <div className="p-20">
        <div style={{width: '100%', height: 720}}>
          <Player
            url="https://www.youtube.com/watch?v=hQX7Zub0ZdI"
          />
        </div>
        <VideoInfo
            title="Mittensさん - Yui"
            views={6.457}
            date="5 dic 2019"
            likesAndDislikes={{
              likes: 435,
              dislikes: 100
            }}
        />
        <VideoUserInfo
          userPicture={picture}
          username="Dross Rotzank"
          subscribers={80000}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perferendis magni suscipit quod ipsum deserunt reiciendis ea, dolorum debitis alias molestias nesciunt nostrum unde dicta, eos doloribus repellendus mollitia dolore repudiandae rerum voluptatem iure tempora earum dolorem? Soluta modi qui facere, totam ipsa tempora, repellendus rem reprehenderit voluptas sunt, dolor sed placeat! Totam laborum iure reprehenderit neque! Incidunt deserunt hic libero quos facilis, nesciunt corrupti. Incidunt voluptatum itaque quisquam beatae fuga. Illo, aliquid. Veniam, temporibus? Sit possimus dolor porro, ex animi fugiat rem vitae voluptas facilis dicta? Dolorum nulla, iusto qui vitae molestiae necessitatibus architecto repellat optio quibusdam pariatur incidunt odio omnis modi impedit labore nobis est culpa aspernatur, facilis natus quo dolore quam id. Reprehenderit, quidem non id perspiciatis ipsum dolorum aspernatur numquam laborum quis velit nostrum optio, maxime fugiat iusto omnis illum quisquam earum itaque dolorem cupiditate repellat pariatur? Soluta eum incidunt, laborum repellendus voluptatem molestias! Excepturi enim dolore tempore earum quaerat nisi hic vitae sed obcaecati autem consequatur dolores consectetur, fugiat quisquam rerum delectus dolor. Tempore dolorum ex culpa. Laudantium delectus sint consectetur nisi error repellendus distinctio sequi molestias assumenda excepturi beatae at molestiae non numquam voluptas aliquam laboriosam nemo quae et quasi, dolores porro minus. Veritatis quaerat, laudantium voluptatibus recusandae delectus dignissimos ullam porro, nostrum fugit, animi rerum? Mollitia temporibus adipisci odit? Ipsam sapiente laborum fuga eos, sed delectus repudiandae quos suscipit, quas mollitia illum. Hic nam quam aspernatur placeat! Beatae harum earum enim, nobis alias voluptatibus sunt, repellendus esse nisi ducimus deleniti rem omnis quae fugit non ea nemo exercitationem consectetur minus. Totam, ipsum sit nostrum, ipsam voluptas odio ad veritatis error dolores quod pariatur distinctio eaque nam. Fugit repudiandae possimus ad deserunt dolore quibusdam, at, obcaecati saepe officiis magnam dicta asperiores fugiat ipsa veritatis amet quaerat veniam praesentium porro? Veritatis qui ad ut expedita eaque architecto sint soluta iusto fugit ea nihil doloremque dignissimos, vitae ipsa atque molestias alias quasi quam dolorem iure laudantium esse. Voluptatibus labore sapiente vero asperiores sit doloremque minima ipsam est inventore vitae in excepturi velit repellat ipsum, quo fugiat qui adipisci molestiae. Ea autem sit natus culpa assumenda ut suscipit cumque necessitatibus corporis, cum sed, ratione rem asperiores laudantium voluptatem illum, delectus officiis voluptas veritatis magnam sequi eaque hic deleniti? Dicta, soluta fugiat exercitationem laboriosam distinctio a quae dolorem repellat! Rerum harum eveniet perspiciatis reiciendis maiores adipisci quis pariatur, laborum, cumque quibusdam expedita voluptatem non aspernatur numquam provident architecto, dolorem eligendi. Impedit culpa dolorem a sit unde quis voluptate alias, nam obcaecati earum quibusdam aliquam provident assumenda ullam quos beatae recusandae reprehenderit. Impedit quos in placeat quis unde tempore, quibusdam minus aliquam omnis delectus commodi illum sunt reiciendis dolor sit tempora, dicta possimus odio quas esse. Necessitatibus commodi ratione, culpa quod id nemo libero aspernatur accusantium dolores, velit possimus numquam voluptatem officia qui dolore dignissimos eaque fuga amet laboriosam! Labore facilis dolore praesentium, consectetur unde dolorum, iure soluta, sed accusamus fugiat minus impedit ratione nisi repellendus alias dignissimos quam? Dolorem recusandae voluptatem illo quas reiciendis aliquid deleniti inventore maiores."
        />
        <CommentInput onSubmit={onSubmit} />
        <div className="mt-8">
          {
            fakeData.map((comment, index): JSX.Element => {
              return (
                <Comment 
                  key={index}
                  picture={comment.picture}
                  username={comment.username}
                  date={comment.date}
                  comment={comment.comment}
                  likesAndDislikes={comment.likesAndDislikes}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Watch;
