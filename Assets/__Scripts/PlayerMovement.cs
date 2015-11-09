using UnityEngine;
using System.Collections;

public class PlayerMovement : MonoBehaviour
{
    // Speed + RB2D for movement
    public float speed = 7.5f;
    private Rigidbody2D rb;

    // Force applied when jumping
    public float jumpForce = 5;

    // Drag to keep player from sliding after moving
    public float maxDrag = 2;
    public float forceConstant = 4;

    // Stop player from repeated jumping
    private float distToGround;

    // Animator instance
    private Animator animator;

    void Start ()
    {
        // Gets Rigidbody for movement
        rb = GetComponent<Rigidbody2D>();

        animator = this.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {


        // Calls Jumping method
        if (Input.GetKeyDown("w") || Input.GetKeyDown("up"))
            Jump();

        // Apply drag
        Vector2 forceDirection = new Vector2(Input.GetAxis("Horizontal"), 0.0f);
        float moveHorizontal = Input.GetAxis("Horizontal");

        // Reduces drag when the player moves and stop faster when input stops
        rb.drag = Mathf.Lerp(maxDrag, 0, forceDirection.magnitude / speed);

        // Reduces amount of force that acts on player if player is already moving
        float forceMultiplier = Mathf.Clamp01((speed - rb.velocity.magnitude) / speed);
        rb.AddForce(forceDirection * (forceMultiplier * Time.deltaTime * forceConstant));

        // Do appropriate animations for walking  
        if (moveHorizontal < 0)
        {
            animator.SetInteger("Direction", 2); // Go left
        }
        else
        {
            animator.SetInteger("Direction", 1); // Go right
        }

    }
        

    void FixedUpdate()
    {
        // Movement with arrow keys
        float moveHorizontal = Input.GetAxis("Horizontal");
        Vector2 movement = new Vector2(moveHorizontal, 0.0f);

        rb.AddForce(movement * speed);

      
    }
    

    // Jump method
    // Jump with space bar
    void Jump()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        Vector3 up = transform.TransformDirection(Vector3.up);
        rb.AddForce(up * jumpForce, ForceMode2D.Impulse);       
       
    }
}
