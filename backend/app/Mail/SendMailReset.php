<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMailReset extends Mailable
{
    use Queueable, SerializesModels;
    public $token;
    public $email;
    public $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $email, $name)
    {
        $this->token = $token;
        $this->email = $email;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('desarrollo@spira.co', 'Kit Conversaciones Inteligentes')
            ->subject('Restarurar contraseña')
            ->markdown('emails.passwordReset')
            ->with([
                'token' => $this->token,
                'email' => $this->email,
                'name' => $this->name
            ]);
    }
}
