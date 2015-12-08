using UnityEngine;
using System.Collections;

public class SwampmanController : MonoBehaviour {
	
	public float health;
	public float moveSpeed;
	public bool moveRight;
	public Transform wallCheck;
	public Transform edgeCheck;
	public float wallCheckRadius;
	public LayerMask whatIsWall;
	public LayerMask whatIsEdge;
	public GameObject deathParticle;
	private Rigidbody2D swampman;
	private bool hittingWall;
	private bool notAtEdge;
	
	// Use this for initialization
	void Start () {
		health = 100;
		swampman = GetComponent<Rigidbody2D> ();
	}
	
	// Update is called once per frame
	void Update () {
		hittingWall = Physics2D.OverlapCircle (wallCheck.position, wallCheckRadius, whatIsWall);
		
		notAtEdge = Physics2D.OverlapCircle (edgeCheck.position, wallCheckRadius, whatIsEdge);
		
		if (hittingWall || !notAtEdge) {
			moveRight = !moveRight;
		}
		
		if (moveRight) {
			transform.localScale = new Vector3(-1f, 1f, 1f);
			swampman.velocity = new Vector2 (moveSpeed, swampman.velocity.y);
		} else {
			transform.localScale = new Vector3(1f, 1f, 1f);
			swampman.velocity = new Vector2(-moveSpeed, swampman.velocity.y);
		}
		
		if (health <= 0) {
			Destroy (gameObject);
			Instantiate(deathParticle, transform.position, transform.rotation);
		}
		
	}
	
	void OnCollisionEnter2D(Collision2D collision)
	{
		// Player revolver bullet
		if (collision.gameObject.tag == "RevolverBullet")
		{
			health -= 10;
		}
		
		// Player shotgun bullet
		if (collision.gameObject.tag == "ShotgunBullet")
		{
			health -= 5;
		}
		
		// Player rocket bullet
		if (collision.gameObject.tag == "RocketBullet") 
		{
			health -= 25;
		}
	}
	
	
}

