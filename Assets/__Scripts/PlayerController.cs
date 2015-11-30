
using UnityEngine;
using System.Collections;
using System;
using System.Threading;

public class PlayerController : MonoBehaviour
{
    /* **** PUBILC **** */
    public float walkSpeed = 2f;
    public float runSpeed = 2f;
    public float jumpForce = 200f;
    public bool isGrounded;
    public int playerHealth = 100;
    public int attackDamage;
    public Transform groundCheck;
    public LayerMask whatIsGround;
    public float groundRadius = 0.2f;

    /* **** PRIVATE **** */
    private Rigidbody2D player;
    private Animator animator;
    private bool facingRight;
    private bool jumpedOnce;
    private bool jumpedTwice;

    /* **** ON START OF GAME, SETUP PLAYER **** */
    void Start() {
        player = this.GetComponent<Rigidbody2D>();
        animator = player.GetComponent<Animator>();
        isGrounded = true;
        jumpedOnce = false;
        jumpedTwice = false;
        facingRight = true;
		Debug.Log (facingRight);
    }

    /* **** EXECUTED ONCE PER PHYSICS STEP **** */
    void Update() {
		isGrounded = Physics2D.OverlapCircle (groundCheck.position, groundRadius, whatIsGround);

		if (isGrounded) {
			animator.SetBool ("Jumping", false);
			jumpedOnce = false;
			jumpedTwice = false;
		}

		Move ();

		if (Input.GetKey (KeyCode.LeftShift)) {
			Sprint ();
		}

		if (Input.GetButtonDown ("Jump")) {
			Debug.Log ("Jumping in Process");
			Jump ();
			Debug.Log ("Jumping Ended");
		}
		if (Input.GetMouseButtonDown (0)) {
			GetComponent<Animator> ().Play ("PlayerAttackAnim");
			Attack ();
		}
	

		if (Input.GetMouseButtonUp (0))
			animator.SetBool ("Attacking", false);
		if (animator.GetBool ("SwordAttack"))
			animator.SetBool ("SwordAttack", false);
		if (Input.GetKeyDown ("o")) {
			animator.SetBool ("SwordAttack", true);
			GetComponent<Animator>().Play("playerSwordSwing");
		}
			

		//if (Input.GetKeyDown ("o"))
			//animator.SetBool ("SwordAttack", false);
		if (playerHealth <= 0)
            Death();

    }

    void Move() {
        float movement = Input.GetAxis("Horizontal");

        player.velocity = new Vector2(movement * walkSpeed, player.velocity.y);
        animator.SetFloat("Walk", Mathf.Abs(movement));
        if (movement > 0 && !facingRight) {
            Flip();
        } else if (movement < 0 && facingRight) {
            Flip();
        } 
    }

	public Rigidbody2D getPlayer(){
		return player;
	}
    void Jump() {
        Thread.Sleep(10);
        animator.SetBool("Jumping", true);
        // First check if the player has maxed out jumps and is still in the air
        if (!isGrounded && jumpedTwice) {

            // THEN GTFO
            return;
        }

        // If player is on ground
        if (isGrounded) {

            player.AddForce(new Vector2(0, jumpForce));
            animator.SetBool("Jumping", true);
            jumpedOnce = true;
        // If player is in the air, they made a single jump
        } else if (!isGrounded) {
            player.AddForce(new Vector2(0, jumpForce));
            jumpedTwice = true;
        }        
    }

    void Attack() {
        animator.SetBool("Attacking", true);
    }

    void Sprint() {
        float movement = Input.GetAxis("Horizontal");
        player.velocity = new Vector2(movement * walkSpeed * runSpeed, player.velocity.y);
        animator.SetFloat("Walk", Mathf.Abs(movement));
    }


    void Death() { }

    void Respawn() { }

    /* Flip ensures smooth animations for the object. Rather than run an animation
     * for each direction the object faces, it simply turns the animation the opposite
     * direction on its horizontal axis.
     */
    void Flip() {
            facingRight = !facingRight;
            Vector3 theScale = transform.localScale;
            theScale.x *= -1;
            transform.localScale = theScale;        
    }

	public bool isFacingRight(){
		return facingRight;
	}
}
