import React from 'react'
import { useLikeToggle} from './useLikeToggle'


export const Button = (props) => {

  const [{ loading, error, liked }, { like, unlike }] = useLikeToggle({ id: props.id, liked: props.liked });

  return liked
    ? <Button onClick={unlike}>Unlike</Button>
    : <Button onClick={like}>Like</Button>
}
