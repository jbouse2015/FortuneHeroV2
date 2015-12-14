
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
	public AudioClip jumpSound;
	public AudioClip deathSound;
	public BoxCollider2D bodyCollison;
	
	/* **** PRIVATE **** */
	private Rigidbody2D player;
	private Animator animator;
	private SpriteRenderer sprd;
	private bool facingRight;
	private bool jumpedTwice;
	private float timeBetweenJumps = 0.3f;
	private float jumpTimeStamp;
	private float LeftsprintClock = 0.5f;
	private float LeftsprintTime;
	private int leftClick;
	private bool isLeftSprint;
	private float RightsprintClock = 0.5f;
	private float RightsprintTime;
	private int rightClick;
	private bool enemyHit;
	private bool hazardHit;
	private bool isRightSprint;
	private float hazardTime;
	private float enemyTime;
	private float enemyHazardClock = 2f;
	private float totalTime;
	private float hitTime;
	private int hitCount;
	private bool movingInCollision;
	private AudioSource source;
	
	
	void Awake()
	{
		source = GetComponent<AudioSource>();
	}
	
	/* **** ON START OF GAME, SETUP PLAYER **** */
	void Start() {
		player = this.GetComponent<Rigidbody2D>();
		animator = player.GetComponent<Animator>();
		sprd = GetComponentInChildren<SpriteRenderer> ();
		isGrounded = true;
		jumpedTwice = false;
		facingRight = true;
		Debug.Log (facingRight);
		playerHealth = 100;
		SetHealthText();
		
		AudioSource[] audios = GetComponents<AudioSource>();
		AudioSource death = audios[1];
		AudioSource jumpSound = audios[3];
	}
	
	/* **** EXECUTED ONCE PER PHYSICS STEP **** */
	void Update() {
		isGrounded = Physics2D.OverlapCircle (groundCheck.position, groundRadius, whatIsGround);
		
		if (isGrounded) {
			animator.SetBool ("Jumping", false);
			jumpedTwice = false;
		}
		
		Move ();
		
		if (Input.GetKey (KeyCode.LeftShift)) {
			Sprint ();
		}
		
		if (Input.GetKeyDown("w") || Input.GetKeyDown("up")) {
			Debug.Log ("Jumping in Process");
			Jump ();
			Debug.Log ("Jumping Ended");
		}
		if (Input.GetKeyDown("f"))
		{
			GetComponent<Animator>().Play("PlayerAttackAnim");
			Attack();
		}
		
		if (Input.GetKeyDown("f"))
			animator.SetBool ("Attacking", false);
		if (animator.GetBool ("SwordAttack"))
			animator.SetBool ("SwordAttack", false);
		if (Input.GetKeyDown ("o")) {
			animator.SetBool ("SwordAttack", true);
			GetComponent<Animator>().Play("playerSwordSwing");
		}
		
		
		//if (Input.GetKeyDown ("o"))
		//animator.SetBool ("SwordAttack", false);
		
		isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundRadius, whatIsGround);
		
		if (isGrounded) {
			animator.SetBool("Jumping", false);
			jumpedTwice = false;
		}
		
		Move();
		
		if (Input.GetKey(KeyCode.LeftShift)) {
			Sprint();
		}
		
		if (Input.GetKeyDown("w") && Time.time >= jumpTimeStamp) {
			jumpTimeStamp = Time.time + timeBetweenJumps;
			Jump ();
		}
		
		if (Input.GetKeyDown("f"))
			Attack();
		
		if (Input.GetKeyDown("f"))
			animator.SetBool("Attacking", false);
		
		if (playerHealth <= 0)
			Respawn();
		
		sprintCheck ();
		if (Input.GetKey ("a") && isLeftSprint)
			Sprint ();
		else if (Input.GetKey ("d") && isRightSprint)
			Sprint ();
		if (hitTime >= 0)
			hitTime -= Time.deltaTime;
		if (hitTime < 0)
			hitTime = 0;
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
	
	void sprintCheck(){
		
		if (Input.GetKeyDown ("d")) {
			isLeftSprint = false;
			LeftsprintTime = 0f;
			leftClick = 0;
			if (RightsprintTime > 0 && rightClick == 1/*Number of Taps you want Minus One*/){
				isRightSprint = true;
			}else{
				RightsprintTime = 0.5f ; 
				rightClick += 1 ;
			}
			
		} else if (Input.GetKeyDown ("a")) {
			isRightSprint = false;
			RightsprintTime = 0f;
			rightClick = 0;
			if ( LeftsprintTime > 0 && leftClick == 1/*Number of Taps you want Minus One*/){
				//Has double tapped
				isLeftSprint = true;
			}else{
				LeftsprintTime = 0.5f ; 
				leftClick += 1 ;
			}
		}  
		if ( LeftsprintTime > 0 )
		{
			
			LeftsprintTime -= 1 * Time.deltaTime ;
			
		}else{
			leftClick = 0 ;
			//isLeftSprint = false;
		}
		if ( RightsprintTime > 0 )
		{
			
			RightsprintTime -= 1 * Time.deltaTime ;
			
		}else{
			rightClick = 0 ;
			//isRightSprint = false;
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
			
			source.PlayOneShot(jumpSound, 0.3f);
			
			// If player is in the air, they made a single jump
		} else if (!isGrounded) {
			player.AddForce(new Vector2(0, jumpForce));
			jumpedTwice = true;
			source.PlayOneShot(jumpSound, 0.3f);
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
	{	BoxCollider2D boxColl = GetComponent<BoxCollider2D>();
		CircleCollider2D circleColl = GetComponent<CircleCollider2D> ();
		Debug.Log ("Hit Count " + hitCount);
		//hitCount++;
		//movingInCollision = true;
		
		
		if (collision.gameObject.tag == "Enemy") {
			if (hitTime == 0f) {
				hitCount++;
				enemyHit = true;
				playerHealth -= 10;
				StartCoroutine (ShowDamage ());
				SetHealthText ();
				enemyHit = true;
				hitTime = 1f;
				Debug.Log ("Enemy Hit");
				movingInCollision = true;
				
				
			}
			
		} else if (collision.gameObject.tag == "Hazard") {
			if (hitTime == 0f) {
				//hitTime = totalTime;
				playerHealth -= 5;
				StartCoroutine (ShowDamage ());
				Debug.Log (collision.collider.IsTouching(boxColl));
				SetHealthText ();
				hazardHit = true;
				hitTime = 1f;
				movingInCollision = true;
				
			}
			
		}else if (collision.gameObject.tag == "Health") {
			playerHealth = 100;
			Destroy (collision.gameObject);
			SetHealthText ();
		} else if (collision.gameObject.tag == "EnemyProjectile") {
			Destroy (collision.gameObject);
			playerHealth -= 10;
			StartCoroutine (ShowDamage ());
			SetHealthText ();
			
		} 
		movingInCollision = false;
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
		source.PlayOneShot(deathSound, 3f);
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