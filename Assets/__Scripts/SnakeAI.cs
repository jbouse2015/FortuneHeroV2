using UnityEngine;
using System.Collections;

public class SnakeAI : MonoBehaviour {

    private Rigidbody2D rb;
    private Transform target;
    private bool facingRight;

    void Start () {
        facingRight = true;
        target = GameObject.FindGameObjectWithTag("Player").transform;
    }
	
	void FixedUpdate () {
	
	}    

    // Flips the sprite currently displayed by the Sprite renderer
    void Flip(float horizontal)
    {
        if (horizontal > 0 && !facingRight || horizontal < 0 && facingRight)
        {
            facingRight = !facingRight;
            Vector3 theScale = transform.localScale;
            theScale.x *= -1;
            transform.localScale = theScale;
        }
    }


}
