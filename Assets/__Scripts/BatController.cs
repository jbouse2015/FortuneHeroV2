using UnityEngine;
using System.Collections;

public class BatController : MonoBehaviour {

	public float health;
	public float moveSpeed;
	public float playerRange;
	public GameObject deathParticle;
	private PlayerController player;
	private Animator anim;
	private bool facingLeft;
	
	// Use this for initialization
	void Start () {
		health = 10;
		anim = GetComponent<Animator> ();
		anim.enabled = false;
		facingLeft = true;
		player = FindObjectOfType<PlayerController> ();
	}
	
	// Update is called once per frame
	void Update () {

		if (player.transform.position.x < transform.position.x && !facingLeft) {
			Flip ();
		} else if (player.transform.position.x > transform.position.x && facingLeft) {
			Flip();
		}

		if (transform.localScale.x < 0 && 
		    player.transform.position.x > transform.position.x && 
		    player.transform.position.x < transform.position.x + playerRange) 
		{
			anim.enabled = true;
			transform.position = Vector3.MoveTowards (transform.position, player.transform.position, moveSpeed * Time.deltaTime);
		}
		
		if (transform.localScale.x > 0 && 
		    player.transform.position.x < transform.position.x && 
		    player.transform.position.x > transform.position.x - playerRange) 
		{
			anim.enabled = true;
			transform.position = Vector3.MoveTowards (transform.position, player.transform.position, moveSpeed * Time.deltaTime);
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

	void Flip() {
		facingLeft = !facingLeft;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
	
	
}


