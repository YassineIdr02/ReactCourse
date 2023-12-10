import { useDispatch } from "react-redux";
import { AddReaction } from "./postSlice";

const reactionEmojie= {
        like: '👍🏻',
        dislike: '👎🏻',
        heart: '❤️',
        angry: '😠',
        wow: '😲'
}


const Reactions = ({post}) => {

    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmojie).map(([rname,emoji]) => {
        return (
            <button key={rname}
                    type='button'
                    className="reactions"
                    onClick={()=> dispatch(AddReaction({postId: post.id, reaction: rname}))}
            >
                {emoji} {post.reactions[rname]} 
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}

export default Reactions