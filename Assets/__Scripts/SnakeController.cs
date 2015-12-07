using UnityEngine;
using System.Collections;

public class SnakeController : MonoBehaviour {

	public float health;
	public float moveSpeed;
	public bool moveRight;
	public Transform wallCheck;
	public Transform edgeCheck;
	public float wallCheckRadius;
	public LayerMask whatIsWall;
	public LayerMask whatIsEdge;
	public GameObject deathParticle;
	private Rigidbody2D snake;
	private bool hittingWall;
	private bool notAtEdge;

	// Use this for initialization
	void Start () {
		health = 20;
		snake = GetComponent<Rigidbody2D> ();
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
			snake.velocity = new Vector2 (moveSpeed, snake.velocity.y);
		} else {
			transform.localScale = new Vector3(1f, 1f, 1f);
			snake.velocity = new Vector2 (-moveSpeed, snake.velocity.y);
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
