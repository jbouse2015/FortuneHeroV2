
using UnityEngine;
using System.Collections;
using System;
using System.Threading;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour
{
    /* **** PUBILC **** */
    public float walkSpeed = 2f;
    public float runSpeed = 2f;
    public float jumpForce = 200f;
    public bool isGrounded;
    public int playerHealth;
	public Text healthText;
    public int attackDamage;
    public Transform groundCheck;
    public LayerMask whatIsGround;
    public float groundRadius = 0.2f;
	public GameObject spawnPoint;

    /* **** PRIVATE **** */
    private Rigidbody2D player;
    private Animator animator;
	private SpriteRenderer sprd;
    private bool facingRight;
    private bool jumpedTwice;
	private float timeBetweenJumps = 0.3f;
	private float jumpTimeStamp;

    /* **** ON START OF GAME, SETUP PLAYER **** */
    void Start() {
        player = this.GetComponent<Rigidbody2D>();
        animator = player.GetComponent<Animator>();
		sprd = GetComponentInChildren<SpriteRenderer> ();
        isGrounded = true;
        jumpedTwice = false;
        facingRight = true;
<<<<<<< HEAD
		Debug.Log (facingRight);
=======
		playerHealth = 100;
		SetHealthText();
>>>>>>> b6e2cc3e7c7da9e04f01b29a7a922e7ccb149162
    }

    /* **** EXECUTED ONCE PER PHYSICS STEP **** */
    void Update() {
<<<<<<< HEAD
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

=======
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundRadius, whatIsGround);

        if (isGrounded) {
            animator.SetBool("Jumping", false);
            jumpedTwice = false;
        }

        Move();

        if (Input.GetKey(KeyCode.LeftShift)) {
            Sprint();
        }

        if (Input.GetButtonDown ("Jump") && Time.time >= jumpTimeStamp) {
			jumpTimeStamp = Time.time + timeBetweenJumps;
			Jump ();
		}

        if (Input.GetMouseButtonDown(0))
            Attack();

        if (Input.GetMouseButtonUp(0))
            animator.SetBool("Attacking", false);

        if (playerHealth <= 0)
            Respawn();
>>>>>>> b6e2cc3e7c7da9e04f01b29a7a922e7ccb149162
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
	
	//Damage from hazards and health pickups
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Hazard")
        {
            playerHealth -= 5;
			StartCoroutine(ShowDamage ());
            SetHealthText();
        }

        if (collision.gameObject.tag == "Health")
        {
            playerHealth = 100;
            Destroy(collision.gameObject);
            SetHealthText();
        }

		if (collision.gameObject.tag == "EnemyProjectile") {
			Destroy(collision.gameObject);
			playerHealth -= 10;
			StartCoroutine(ShowDamage ());
			SetHealthText();
		}
    }

    //Set playerHealth ui text
    void SetHealthText()
    {
        healthText.text = "Health: " + playerHealth;
    }

    //Respawn the player
    void Respawn()
    {
        this.transform.position = spawnPoint.transform.position;
        playerHealth = 100;
        SetHealthText();
    }

	IEnumerator ShowDamage() {
		sprd.color = Color.red;
		yield return new WaitForSeconds(1);
		sprd.color = Color.white;
	}

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
