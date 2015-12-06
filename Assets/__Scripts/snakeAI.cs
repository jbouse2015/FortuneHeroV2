using UnityEngine;
using System.Collections;

public class snakeAI : MonoBehaviour {

    public float speed = 1f;
    public int health;
    private Rigidbody2D snake;
    private Transform target;
    public GameObject deathParticle;
    public PlayerController player;
    public float timeBetweenAttacks = .5f;
    public float range = 1.0f;

    // Snake pit is just what I named the objects to act as waypoints
    public GameObject snakePit;
    

    // Use this for initialization
    void Start ()
    {
        snake = this.GetComponent<Rigidbody2D>();
        health = 10;
	}
	
	// Update is called once per frame
	void Update ()
    {
        flipSpeed();
        Move();

        if (health <= 0)
        {
            Destroy(gameObject);
            Instantiate(deathParticle, transform.position, transform.rotation);
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "RevolverBullet")
        {
            health -= 9;
        }
    }

    // This move class is what I'm having difficulty with
    void Move()
    {
        Vector2 movement;
        movement = new Vector2(transform.position.x, transform.position.y) * -speed;
    }

    void flipSpeed()
    {
        if (snake.GetComponent<BoxCollider2D>() == snakePit.GetComponent<BoxCollider2D>())
            speed = -speed;
    }

    void Attack()
    {
        
    }
    void Attack(Collision2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            player.playerHealth -= 10;
        }
    }
}
