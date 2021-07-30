<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmergencyCallReceived extends Mailable
{
    use Queueable, SerializesModels;
    public $subject = 'Bienvenido al Sitio Web Kit de Conversaciones Inteligentes';
    public $name;
    public $last_name;
    public $email;
    public $random_password;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $last_name, $email, $random_password)
    {
        $this->name = $name;
        $this->last_name = $last_name;
        $this->email = $email;
        $this->random_password = $random_password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.message_received');
    }
}
