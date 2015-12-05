using UnityEngine;
using System.Collections;

public class SwampmanController : MonoBehaviour {

	public PlayerController player;
	public float speed;
	public int health;	
	public GameObject deathParticle;	
	public float playerRange;
	private bool facingLeft;
	private Rigidbody2D swampman;
	private Animator playAnimation;

	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		facingLeft = true;
		health = 100;
		playAnimation = GetComponent<Animator>();
		playAnimation.enabled = false;
		swampman = GetComponent<Rigidbody2D> ();
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
			playAnimation.enabled = true;
			// Wait 1.5 seconds then move toward player
		}
		
		if (transform.localScale.x > 0 && 
		    player.transform.position.x < transform.position.x && 
		    player.transform.position.x > transform.position.x - playerRange) 
		{
			playAnimation.enabled = true;
			// Wait 1.5 seconds then move toward player
		}

		if (health <= 0) {
			Destroy (gameObject);
			Instantiate (deathParticle, transform.position, transform.rotation);
		}
	}
	

	void OnCollisionEnter2D(Collision2D collision)
	{
		if (collision.gameObject.tag == "RevolverBullet") {
			health -= 10;
		}
	}

	void Flip() {
		facingLeft = !facingLeft;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
}
